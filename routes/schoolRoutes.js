const express = require("express");
const router = express.Router();
const schoolController = require("../controllers/schoolController");

// Define the POST /addSchool route
router.post("/addSchool", schoolController.addSchool);
router.get("/listSchools", schoolController.listSchools);

module.exports = router;
