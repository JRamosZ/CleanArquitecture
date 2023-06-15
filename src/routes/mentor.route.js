const express = require("express");
const {
  create,
  list,
  deleteM,
  update,
  getById,
} = require("../usecases/mentor.usecase");

const router = express.Router();

// Routes

// Create Mentor
router.post("/", async (req, res) => {
  try {
    const mentor = await create(req.body);
    res.status(201);
    res.json({
      success: true,
      data: mentor,
    });
  } catch (err) {
    res.status(err.status || 500);
    res.json({
      success: false,
      message: err.message,
    });
  }
});

// List Mentors
router.get("/", async (req, res) => {
  try {
    const mentors = await list(req.query);
    res.json({
      success: true,
      data: mentors,
    });
  } catch (err) {
    res.status(404);
    res.json({
      success: false,
      message: err.message,
    });
  }
});

// Delete Mentor
router.delete("/:id", async (req, res) => {
  try {
    const mentor = await deleteM(req.params.id);
    res.json({
      succes: true,
      data: mentor,
    });
  } catch (err) {
    res.status(404);
    res.json({
      success: false,
      message: err.message,
    });
  }
});

// Update Mentor
router.patch("/:id", async (req, res) => {
  try {
    const updatedMentor = await update(req.params.id, req.body);
    res.json({
      success: true,
      data: updatedMentor,
    });
  } catch (err) {
    res.status(err.status || 500);
    res.json({
      success: false,
      message: err.message,
    });
  }
});

module.exports = router;
