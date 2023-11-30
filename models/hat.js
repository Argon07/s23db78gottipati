// models/hat.js
const mongoose = require('mongoose');

const hatSchema = new mongoose.Schema({
  hatStyle: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
  size: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
    min: [10, "Price must be at least 10"],
    max: [500, "Price must be less than or equal to 500"],
  },
});

module.exports = mongoose.model("Hat", hatSchema);
