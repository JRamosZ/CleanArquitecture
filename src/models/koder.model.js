const mongoose = require("mongoose");

/**
 * 1. Schema de mongoose
 * Modelo
 */

const koderSchema = new mongoose.Schema({
  name: {
    type: String,
    minlenght: 3,
    maxlenght: 10,
    required: true,
  },
  module: {
    type: String,
  },
  generation: {
    type: String,
  },
  age: {
    type: Number,
    required: true,
    min: 18,
    max: 100,
  },
  sex: {
    type: String,
    enum: ["f", "m", "o"],
  },
  createdAt: {
    type: Date,
  },
});

// Exportamos modelo

module.exports = mongoose.model("koders", koderSchema, "Koders");
