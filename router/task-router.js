 const express = require('express');
// const router = express.Router();
// const taskController = require('../controllers/task.controller');
// const multer = require('multer');



// // Set up multer to handle image uploads
// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//       cb(null, 'uploads/');
//     },
//     filename: (req, file, cb) => {
//       cb(null, Date.now() + file.originalname);
//     },
//   });

//   const upload = multer({ storage });

// // Routes
// // Upload image to Cloudinary
// //router.post('/upload', upload.single('image'), taskController.uploadImage);
// router.post('/upload', upload.single('image'), taskController.uploadImage);






// // Add task route
// router.post('/tasks', taskController.addTask);

// // Get all tasks route
// router.get('/tasks', taskController.getTasks);

// // Update task status route
// router.put('/tasks/:id', taskController.updateTaskStatus);

// // Delete task route
// router.delete('/tasks/:id', taskController.deleteTask);

// module.exports = router;




// const express = require('express');
 const router = express.Router();
// const multer = require('multer');
// const path = require('path');
// const Task = require('../models/task-model'); // Your Task model

// // Set up multer to handle image uploads (locally)
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     const uploadDir = path.join(__dirname, '../uploads'); // Ensure the 'uploads' directory exists
//     cb(null, uploadDir);
//   },
//   filename: (req, file, cb) => {
//     cb(null, Date.now() + path.extname(file.originalname)); // Save file with a unique name
//   },
// });

// const upload = multer({ storage });

// // Route to handle task creation with image upload (no Cloudinary)
// router.post('/tasks', upload.single('image'), async (req, res) => {
//   try {
//     const { name, description } = req.body;
//     const imageUrl = req.file ? `/uploads/${req.file.filename}` : ''; // Use local file path

//     const newTask = new Task({
//       name,
//       description,
//       imageUrl, // Save the file path in the database
//       status: 'Pending',
//     });

//     await newTask.save();
//     res.status(201).json(newTask);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Failed to create task', error });
//   }
// });

// module.exports = router;

// Backend (Node.js with Express) using multer to upload images
// const multer = require('multer');
// const path = require('path');
// const Task = require('../models/task-model'); // Assuming you have a Task model

// // Configure storage for multer (save image locally)
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, 'uploads/');
//   },
//   filename: (req, file, cb) => {
//     cb(null, Date.now() + path.extname(file.originalname));
//   },
// });

// const upload = multer({ storage });

// // Route to create a task
// router.post('/tasks', upload.single('image'), async (req, res) => {
//   try {
//     const { name, description } = req.body;
//     const imageUrl = req.file ? `/uploads/${req.file.filename}` : '';

//     const newTask = new Task({
//       name,
//       description,
//       imageUrl, // Store image URL in database
//       status: 'Pending',
//     });

//     await newTask.save();
//     res.status(201).json(newTask);
//   } catch (error) {
//     res.status(500).json({ message: 'Failed to create task', error });
//   }
// });

// module.exports = router;








//const express = require('express');
//const router = express.Router();
// const multer = require('multer');
// const Task = require('../models/task-model'); // Assuming you have a Task model
// const path = require('path');

// // Configure multer to handle file uploads
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, 'uploads/'); // Save images in the 'uploads' directory
//   },
//   filename: (req, file, cb) => {
//     cb(null, Date.now() + path.extname(file.originalname)); // Set the filename to current timestamp + extension
//   },
// });

// const upload = multer({ storage });

// // Route to get all tasks (GET /api/tasks)
// router.get('/tasks', async (req, res) => {
//   try {
//     const tasks = await Task.find(); // Retrieve tasks from the database
//     res.status(200).json(tasks); // Respond with the tasks
//   } catch (error) {
//     res.status(500).json({ message: 'Failed to get tasks', error });
//   }
// });

// // Route to create a new task (POST /api/tasks)
// router.post('/tasks', upload.single('image'), async (req, res) => {
//   try {
//     const { name, description } = req.body;
//     const imageUrl = req.file ? `/uploads/${req.file.filename}` : ''; // Handle image URL

//     const newTask = new Task({
//       name,
//       description,
//       imageUrl,
//       status: 'Pending',
//     });

//     await newTask.save();
//     res.status(201).json(newTask); // Respond with the newly created task
//   } catch (error) {
//     res.status(500).json({ message: 'Failed to create task', error });
//   }
// });

// // Route to update the status of a task (PUT /api/tasks/:taskId)
// router.put('/tasks/:taskId', async (req, res) => {
//   try {
//     const { taskId } = req.params;
//     const { status } = req.body; // Get the status from the request body

//     const updatedTask = await Task.findByIdAndUpdate(
//       taskId,
//       { status }, // Update task status
//       { new: true } // Return the updated task
//     );

//     if (!updatedTask) {
//       return res.status(404).json({ message: 'Task not found' });
//     }

//     res.status(200).json(updatedTask); // Respond with the updated task
//   } catch (error) {
//     res.status(500).json({ message: 'Failed to update task', error });
//   }
// });

// // Route to delete a task (DELETE /api/tasks/:taskId)
// router.delete('/tasks/:taskId', async (req, res) => {
//   try {
//     const { taskId } = req.params;
//     const deletedTask = await Task.findByIdAndDelete(taskId); // Delete the task

//     if (!deletedTask) {
//       return res.status(404).json({ message: 'Task not found' });
//     }

//     res.status(200).json({ message: 'Task deleted successfully' });
//   } catch (error) {
//     res.status(500).json({ message: 'Failed to delete task', error });
//   }
// });

// module.exports = router;

//const express = require('express');
const path = require('path');
const multer = require('multer');
const Task = require('../models/task-model'); // Assuming you have a Task model
//const router = express.Router();

// Configure multer to handle file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Save images in the 'uploads' directory
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Set the filename to current timestamp + extension
  },
});

const upload = multer({ storage });

// Serve static files from 'uploads' directory
router.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Route to get all tasks (GET /api/tasks)
router.get('/tasks', async (req, res) => {
  try {
    const tasks = await Task.find(); // Retrieve tasks from the database
    res.status(200).json(tasks); // Respond with the tasks
  } catch (error) {
    res.status(500).json({ message: 'Failed to get tasks', error });
  }
});

// Route to create a new task (POST /api/tasks)
router.post('/tasks', upload.single('image'), async (req, res) => {
  try {
    const { name, description } = req.body;
    const imageUrl = req.file ? `/uploads/${req.file.filename}` : ''; // Handle image URL

    const newTask = new Task({
      name,
      description,
      imageUrl,
      status: 'Pending',
    });

    await newTask.save();
    res.status(201).json(newTask); // Respond with the newly created task
  } catch (error) {
    res.status(500).json({ message: 'Failed to create task', error });
  }
});

// Route to update the status of a task (PUT /api/tasks/:taskId)
router.put('/tasks/:taskId', async (req, res) => {
  try {
    const { taskId } = req.params;
    const { status } = req.body;

    const updatedTask = await Task.findByIdAndUpdate(
      taskId,
      { status },
      { new: true }
    );

    if (!updatedTask) {
      return res.status(404).json({ message: 'Task not found' });
    }

    res.status(200).json(updatedTask);
  } catch (error) {
    res.status(500).json({ message: 'Failed to update task', error });
  }
});

// Route to delete a task (DELETE /api/tasks/:taskId)
router.delete('/tasks/:taskId', async (req, res) => {
  try {
    const { taskId } = req.params;
    const deletedTask = await Task.findByIdAndDelete(taskId);

    if (!deletedTask) {
      return res.status(404).json({ message: 'Task not found' });
    }

    res.status(200).json({ message: 'Task deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete task', error });
  }
});

module.exports = router;
