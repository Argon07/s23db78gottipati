// models/hat.js
const mongoose = require('mongoose');

const hatSchema = new mongoose.Schema({hatStyle: String, color: String, size: String, price: Number});

module.exports = mongoose.model("Hat", hatSchema);
