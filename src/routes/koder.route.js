const express = require("express");
const {
  list,
  getById,
  create,
  update,
  deleteK,
} = require("../usecases/koder.usecase");

// Router --> Conjunto de rutas en una aplicación
const router = express.Router();

/**
 * Las rutas
 * Aquí vamos a leer el request y responder (response)
 */

// Koders
router.get("/", async (req, res) => {
  try {
    const koders = await list();
    res.json({
      success: true,
      data: koders,
    });
  } catch (err) {
    res.status(400);
    res.json({
      success: false,
      message: err.message,
    });
  }
});

// Obtener koder con ID
router.get("/:id", async (req, res) => {
  try {
    const koder = await getById(req.params.id);
    console.log(koder);
    if (!koder) {
      const error = new Error("Koder Not Found");
      error.status = 404;
      throw error;
    }
    res.json({
      success: true,
      data: koder,
    });
  } catch (err) {
    res.status(400);
    res.status(err.status || 500);
    res.json({
      success: false,
      message: err.message,
    });
  }
});

// Create koder
router.post("/", async (req, res) => {
  try {
    const koder = await create(req.body);
    res.status(201);
    res.json({
      success: true,
      data: koder,
    });
  } catch (err) {
    res.status(err.status || 500);
    res.json({
      success: false,
      message: err.message,
    });
  }
});

// Update koder
router.patch("/:id", async (req, res) => {
  try {
    const koder = await update(req.params.id, req.body);
    if (!koder) {
      const error = new Error("Koder no encontrado");
      error.status = 404;
      throw error;
    }
    res.status(200);
    res.json({
      success: true,
      data: koder,
    });
  } catch (err) {
    res.status(err.status || 500);
    res.json({
      success: false,
      message: err.message,
    });
  }
});

// Delete Koder
router.delete("/:id", async (req, res) => {
  try {
    const koder = await deleteK(req.params.id);
    if (!koder) {
      const error = new Error("Koder no encontrado");
      error.status = 404;
      throw error;
    }
    res.json({
      success: true,
      data: koder,
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
