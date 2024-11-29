# School Management API

A simple Node.js API for managing school data, built using Express.js and MySQL. This API allows you to:

- Add new schools to the database.
- List all schools sorted by proximity to a user-specified location.

## Features
- **Add School API**: Adds a new school to the database.
- **List Schools API**: Fetches a list of schools sorted by their proximity to a user-provided latitude and longitude.

## Technologies Used
- **Node.js**: Runtime environment for the server.
- **Express.js**: Framework for building the API.
- **Aiven**: Deploying MySQL Database for storing school data.
- **Render**: Hosting the Node.js API server.
- **Postman**: For testing and interacting with the API.

## Deployment
The API is hosted on [REnder](https://render.com). You can access the deployed API using the following links:

### API Endpoints:
- **Add School**: `POST https://school-management-api-j77l.onrender.com/addSchool`
- **List Schools**: `GET https://school-management-api-j77l.onrender.com/listSchools`

### Environment Variables:
- `DB_HOST`: Your MySQL host URL.
- `DB_PORT`: MySQL database port.
- `DB_USER`: MySQL user.
- `DB_PASSWORD`: MySQL user password.
- `DB_NAME`: The database name.

The environment variables are stored securely in the Vercel dashboard.

## How to Use

1. **Add School**:
   - Endpoint: `POST  https://school-management-api-j77l.onrender.com/addSchool`
   - Request Body (JSON):
     ```json
     {
       "name": "School Name",
       "address": "School Address",
       "latitude": 40.7128,
       "longitude": -74.0060
     }
     ```
   - This endpoint adds a new school to the database.

2. **List Schools**:
   - Endpoint: `GET https://school-management-api-j77l.onrender.com/listSchools`
   - Query Parameters:
     - `latitude`: The latitude of the user's location.
     - `longitude`: The longitude of the user's location.
   - This endpoint returns a list of schools sorted by proximity to the provided coordinates.

## Postman Collection
You can test the API using the provided Postman collection. The collection includes example requests for both the **Add School** and **List Schools** APIs.

- [Download Postman Collection](https://your-postman-link.com)

## Setup Locally

### 1. Clone the Repository
```bash
git clone https://github.com/ShahidKhan323/school-management-api.git
cd school-management-api
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Set Environment Variables
Create a .env file in the root directory of the project and add the following variables:
```bash
DB_HOST=your-database-host
DB_PORT=3306
DB_USER=your-database-user
DB_PASSWORD=your-database-password
DB_NAME=your-database-name
```

### 4. Run the Application Locally
```bash
npm start
```
The application will run on http://localhost:3000

### 5. Test the API
You can now use Postman or any other API testing tool to test the endpoints locally.
