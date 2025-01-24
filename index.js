

require("dotenv").config();
const express =require("express");
const cors = require("cors")
const app=express();
const userRouter=require("./router/user-router");
const contactRouter=require("./router/contact-router");
const taskRoutes =require("./router/task-router")
const connectDb =require("./utils/db");

const fs = require('fs');
const path = require('path');
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
// Check if the uploads folder exists, if not, create it
const uploadsDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
  console.log('Uploads directory created!');
}

const corsOptions = {
  origin: 'https://frontend-nu-flax-37.vercel.app/', // Frontend URL
  methods: 'GET,POST,PUT,DELETE',            // Allowed HTTP methods
  allowedHeaders: 'Content-Type,Authorization', // Allowed headers
};

app.use(cors(corsOptions));  // Enable CORS for all routes

// To parse JSON bodies
app.use(express.json());

// To parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));


app.use("/api/user", userRouter)
app.use("/api/contact",contactRouter)
app.use('/api', taskRoutes);




connectDb().then(()=>{
    

const PORT=process.env.PORT;
app.listen(PORT,()=>{
console.log(`http://localhost:${PORT}`)
});
});