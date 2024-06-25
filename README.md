# Work Management Web App

A full-stack Project Management web application built using the MERN stack (MongoDB, Express.js, React.js, Node.js), styled with Ant-D and Tailwind CSS.

## Deployment

You can find the live deployment of this project [here](https://work-management-web-app-3.onrender.com).

## Features

- User Authentication with bcrypt.
- Three user roles: Owner, Manager, and Member
  - Owner (only one): Can assign Managers
  - Managers (multiple): Can assign tasks to Members
  - Members (multiple): Can manage their assigned tasks
- Task creation, assignment, and tracking.
- Team collaboration and communication tools
- there is a notification feature added to let know the user about changes.
- Responsive design with Ant-D

## Technologies Used

- MongoDB
- Express.js
- React.js
- Node.js
- TailWind CSS
- Ant-D

## Installation

### Backend

1. Clone the repository:

   ```sh
   git clone https://github.com/yourusername/work-management-web-app.git
   cd work-management-web-app/server
   ```

2. Install dependencies:

   ```sh
   npm install
   ```

3. Create a `.env` file in the `backend` directory and add your MongoDB URI and JWT secret:

   ```env
   MONGO_URI=your_mongodb_uri
   JWT_SECRET=your_jwt_secret
   ```

4. Start the backend server:
   ```sh
   nodemon server/server
   ```

### Frontend

1. Navigate to the frontend directory:

   ```sh
   cd ../client
   ```

2. Install dependencies:

   ```sh
   npm install
   ```

3. Start the React development server:
   ```sh
   npm start
   ```

## Project Structure

```plaintext
Work-Management-Web-App/
├── server/
│   ├── config/
│   │   ├── dbConfig.js
|   |   └── cloudinaryConfig.js
│   ├── models/
│   │   ├── notificationModel.js
│   │   ├── projectModel.js
|   |   ├── taskModel.js
│   │   └── userModel.js
│   ├── routes/
│   │   ├── notificationRoute.js
│   │   ├── projectsRoute.js
|   |   ├── tasksRoute.js
|   |   └── usersRoute.js
│   ├── middleware/
│   │   └── authMiddleware.js
│   └── server.js
|
├── client/
│   ├── public/
│   ├── src/
|   |    ├── apicalls/
|   |             ├── index.js
|   |             ├── notifications.js
|   |             ├── projects.js
|   |             ├── tasks.js
|   |             └── users.js
|   |    ├── assets/
│   |    ├── components/
|   |             ├── Divider.js
|   |             ├── Notifications.js
|   |             ├──
|   |             ├──
|   |             └──
│   |    ├── pages/
|   |            ├──
|   |            ├──
|   |            ├──
|   |            ├──
|   |            └──
|   |    ├── redux/
|   |            ├── loadersSlice.js
|   |            ├── store.js
|   |            └── usersSlice.js
|   |    ├── utils/
|   |           └── helper.js
│   |    ├── App.js
│   |    ├── index.js
│   |    └── index.css
│   └── package.json
|
├── package.json
└── README.md
```
