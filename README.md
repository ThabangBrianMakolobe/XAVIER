# XAVIER

# CRUD Application

## Overview

This is a simple CRUD (Create, Read, Update, Delete) application built using Node.js, Express, MongoDB, and React.js. The application is containerized using Docker and can be easily deployed using Docker Compose.

## Features

- **Backend**: Node.js and Express.js for handling API requests, connected to a MongoDB database.
- **Frontend**: React.js for the user interface, interacting with the backend to manage items.
- **Database**: MongoDB for storing item data.
- **Containerization**: Docker for containerizing the application components (backend, frontend, database).
- **Testing**: Jest for backend unit tests and Playwright for frontend end-to-end tests.

## Prerequisites

Before you begin, ensure you have the following installed on your machine:

- **Node.js**: [Download Node.js](https://nodejs.org/)
- **Docker**: [Download Docker](https://www.docker.com/products/docker-desktop)
- **Docker Compose**: Included with Docker Desktop.

## Project Structure

```bash
crud-app/
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   │   └── itemController.js
│   │   ├── models/
│   │   │   └── ItemModel.js
│   │   ├── routes/
│   │   │   └── itemRoutes.js
│   │   ├── app.js
│   │   └── server.js
│   ├── .env
│   ├── Dockerfile
│   ├── package.json
│   └── jest.config.js
│
├── frontend/
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── components/
│   │   │   ├── ItemForm.js
│   │   │   └── ItemList.js
│   │   ├── App.js
│   │   ├── index.js
│   │   └── tests/
│   │       └── App.test.js
│   ├── Dockerfile
│   ├── package.json
│   └── playwright.config.js
│
├── docker-compose.yml
└── README.md
```

## Setup and Installation

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/crud-app.git
cd crud-app
```

### 2. Environment Variables

Create a `.env` file in the `backend` directory and add the following:

```bash
MONGO_URI=mongodb://mongo:27017/crud-app
PORT=5000
```

### 3. Running the Application with Docker Compose

Ensure Docker is running on your machine, then:

```bash
docker-compose up --build
```

This command will:

- Build and start the MongoDB service.
- Build and start the backend service on port `5000`.
- Build and start the frontend service on port `3000`.

### 4. Access the Application

- **Frontend**: Open your browser and navigate to [http://localhost:3000](http://localhost:3000).
- **Backend**: Test the API by sending requests to [http://localhost:5000/api/items](http://localhost:5000/api/items).

## Testing

### 1. Backend Tests

Navigate to the `backend` directory and run:

```bash
npm test
```

### 2. Frontend Tests

Navigate to the `frontend` directory and run:

```bash
npx playwright test
```

## Troubleshooting

### Docker Connection Issues

If you encounter issues connecting to Docker (e.g., "Cannot connect to the Docker daemon"), here are some steps you can take:

1. **Ensure Docker Desktop is Running**:
   - Check if Docker Desktop is running. Look for the Docker icon in the system tray (Windows) or menu bar (Mac).
   - If Docker Desktop isn’t running, start it from your applications menu.

2. **Restart Docker Desktop**:
   - Right-click the Docker icon in the system tray or menu bar and select "Restart Docker Desktop."

3. **Verify Docker Installation**:
   - Open a terminal or command prompt and run:
     ```bash
     docker --version
     ```
   - If Docker isn’t recognized, you may need to reinstall Docker Desktop.

4. **Run Docker Commands with Elevated Permissions**:
   - On Windows, run Command Prompt as Administrator and try your Docker commands again.
   - On Linux, use `sudo` with your Docker commands, like:
     ```bash
     sudo docker-compose up --build
     ```

5. **Reset Docker Desktop**:
   - If Docker Desktop isn’t working correctly, you can reset it to factory settings:
     - Right-click the Docker icon, go to "Settings," then "Reset."
     - Click "Reset to factory defaults."

6. **Reinstall Docker**:
   - If the above steps don’t work, uninstall Docker Desktop, download the latest version from the [Docker website](https://www.docker.com/products/docker-desktop), and reinstall it.

### MongoDB Connection Issues

Ensure that the `MONGO_URI` in your `.env` file matches the MongoDB service in the `docker-compose.yml` file.

## Deployment

To deploy this application, ensure your Docker and Docker Compose are configured on the deployment server. You can deploy using the same `docker-compose up --build` command.

## Contributing

Feel free to fork this repository and make contributions. Pull requests are welcome!

## License

This project is licensed under the MIT License.

---
