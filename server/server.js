const express = require('express');
const app = express();
require('dotenv').config();
app.use(express.json());
const dbConfig = require("./config/dbConfig");
const port = process.env.PORT || 5000;

const usersRoute = require("./routes/usersRoute");
const projectsRoutes = require("./routes/projectsRoute");
const tasksRoute = require("./routes/tasksRoute");

app.use("/api/users",usersRoute);
app.use("/api/projects",projectsRoutes);
app.use("/api/tasks", tasksRoute);

app.listen(port, () => 
console.log(`Node JS server listening on port ${port}`)
);

