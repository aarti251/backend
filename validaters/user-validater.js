const {z}=require("zod");




//creating an object schema


const signUpSchema =z.object({
    username:z.string({required_error:"usrname is required"})
    .trim()
    .min(3,{message:"username must be at least of 3 charecter."})
    .max(255,{message:"username must be more than 255 characters"}),
    email:z.string({required_error:"Email is required"})
    .trim()
    .email({message:"Invalid email address"})
    .min(3,{message:"Email must be at least of 3 charecter."})
    .max(255,{message:"Email must be more than 255 characters"}),
    phone:z.string({required_error:"phone is required"})
    .trim()
    .min(10,{message:"phone must be at least of 10 charecter."})
    .max(20,{message:"phone must not  be more than 20 characters"}),
    password:z.string({required_error:"password is required"})
    .trim()
    .min(6,{message:"password must be at least of 3 charecter."})
    .max(1024,{message:"password must not be more than 1024 characters"}),
});


module.exports =signUpSchema;