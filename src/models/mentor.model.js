const mongoose = require("mongoose");

const mentorSchema = new mongoose.Schema({
  name: {
    type: String,
    minlenght: 3,
    maxlenght: 20,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  generations: [
    {
      name: String,
      isActive: Boolean,
    },
  ],
});

module.exports = mongoose.model("mentors", mentorSchema, "Mentors");
