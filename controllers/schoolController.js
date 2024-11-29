const db = require("../db");
const haversine = require("haversine-distance");

// Add School Controller
exports.addSchool = (req, res) => {
  const { name, address, latitude, longitude } = req.body;

  if (!name || !address || !latitude || !longitude) {
    return res.status(400).json({ error: "All fields are required" });
  }

  const query =
    "INSERT INTO schools (name, address, latitude, longitude) VALUES (?, ?, ?, ?)";
  db.query(query, [name, address, latitude, longitude], (err, result) => {
    if (err) {
      console.error("Database error:", err); // Log detailed error
      return res
        .status(500)
        .json({ error: "Database error", details: err.message });
    }
    res.status(201).json({ message: "School added successfully" });
  });
};

// List Schools Controller
exports.listSchools = (req, res) => {
  const { latitude, longitude } = req.query;

  if (!latitude || !longitude) {
    return res
      .status(400)
      .json({ error: "Latitude and longitude are required." });
  }

  const userLocation = {
    latitude: parseFloat(latitude),
    longitude: parseFloat(longitude),
  };

  const query = "SELECT * FROM schools";
  db.query(query, (err, results) => {
    if (err) {
      console.error("Error fetching schools:", err.message);
      return res.status(500).json({ error: "Failed to retrieve schools." });
    }

    const sortedSchools = results
      .map((school) => {
        const schoolLocation = {
          latitude: school.latitude,
          longitude: school.longitude,
        };
        school.distance = haversine(userLocation, schoolLocation);
        return school;
      })
      .sort((a, b) => a.distance - b.distance);

    res.json(sortedSchools);
  });
};
