

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

//cors
app.use(cors());
// To parse JSON bodies
app.use(express.json());

// To parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));


app.use("/api/user", userRouter)
app.use("/api/contact",contactRouter)
app.use('/api', taskRoutes);




connectDb().then(()=>{
    

const PORT=5000;
app.listen(PORT,()=>{
console.log(`http://localhost:${PORT}`)
});
});