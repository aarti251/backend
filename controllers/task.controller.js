const Task = require('../models/task-model');
const cloudinary = require('../utils/coudanary');


// Upload image to Cloudinary
const uploadImage = async (req, res) => {
  try {
    const result = await cloudinary.uploader.upload(req.file.path);
    return res.status(200).json({ imageUrl: result.secure_url });
  } catch (error) {
    return res.status(500).json({ message: 'Image upload failed', error });
  }
};











// Add task
const addTask = async (req, res) => {
  try {
    const { name, description,imageUrl } = req.body;

    if (!name || !description ||imageUrl) {
      return res.status(400).json({ message: 'Task name and description are required' });
    }

    const task = new Task({ name, description,imageUrl });
    await task.save();
    res.status(201).json(task);
  } catch (err) {
    console.error('Error adding task:', err);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

// Get all tasks
const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (err) {
    console.error('Error fetching tasks:', err);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

// Update task status
const updateTaskStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const updatedTask = await Task.findByIdAndUpdate(id, { status }, { new: true });
    if (!updatedTask) {
      return res.status(404).json({ message: 'Task not found' });
    }

    res.json(updatedTask);
  } catch (err) {
    console.error('Error updating task:', err);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

// Delete task
const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedTask = await Task.findByIdAndDelete(id);

    if (!deletedTask) {
      return res.status(404).json({ message: 'Task not found' });
    }

    res.status(204).send();
  } catch (err) {
    console.error('Error deleting task:', err);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

module.exports = {
  uploadImage,
  addTask,
  getTasks,
  updateTaskStatus,
  deleteTask,
};
