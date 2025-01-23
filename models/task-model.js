const mongoose = require('mongoose');

// Define Task Schema
const taskSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  status: { type: String, enum: ['Pending', 'Completed', 'Done'], default: 'Pending' },
  imageUrl: { type: String },  // Store the image URL
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
