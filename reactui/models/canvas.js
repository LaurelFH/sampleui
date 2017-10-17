const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const canvasSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  synopsis: String,
  date: { type: Date, default: Date.now }
});

const Canvas = mongoose.model("Canvas", canvasSchema);

module.exports = CanvasCompo;
