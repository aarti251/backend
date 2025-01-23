const Contact = require("../models/constact-model");



const contactForm =async (req,res)=>{

try {

   const response = req.body
   await Contact.create(response); 
    return res.status(200).json({message:"contect added successfully"})
} catch (error) {
    return res.status(500).json({message:"contact not added"})
    
}
}


module.exports =contactForm;