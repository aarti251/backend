




const mongoose = require("mongoose");


const URI = process.env.URI;

const connectDb = async () => {
    try {
        await mongoose.connect(URI);
        console.log("Connection successful to the database");
    } catch (error) {
        console.log("Error connecting to database: ", error);
        process.exit(0);
    }
};

module.exports = connectDb;
