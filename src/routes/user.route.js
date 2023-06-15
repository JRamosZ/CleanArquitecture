const express = require("express");
const { create } = require("../usecases/user.usecase");

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const createdUSer = await create(req.body);
    res.status(201);
    res.json({
      success: true,
      data: createdUSer,
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
