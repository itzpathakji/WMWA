const router = require("express").Router();
const Project = require("../models/projectModel");
const authMiddleware = require("../middlewares/authMiddleware");

router.post("/create-project", authMiddleware, async (req, res) => {
  try {
    const newProject = new Project(req.body);
    await newProject.save();
    res.send({
      success: true,
      data: newProject,
      message: "project created Sucessfully",
    });
  } catch (error) {
    res.send({
      error: error.message,
      success: false,
    });
  }
});

router.post("/get-all-projects", authMiddleware, async (req, res) => {
  try {
    const filters = req.body.filters;

    const projects = await Project.find(filters || {});
    res.send({
      success: true,
      data: projects,
    });
  } catch (error) {
    res.send({
      error: error.message,
      success: false,
    });
  }
});

module.exports = router;
