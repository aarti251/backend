const User =require("../models/user-model");
const bcrypt =require("bcryptjs");
const home =async(req,res)=>{
    try {
      res.status(200).send("controllers")  
    } catch (error) {
        console.log(error)
    }
}

//register
const register= async(req,res)=>{

    try {
        const {username,email,phone,password} =req.body;
       
        console.log( username,email,phone,password)
        const userExist = await User.findOne({email});

        if(userExist){
            return res.status(400).json({msg:"user allready exists"})
        }


//hash password
//const saltRound =10;
//const hash_password =await bcrypt.hash(password,saltRound)



 usercreated= await User.create({username,email,phone,password})

        console.log(" usercreated", usercreated);
        res.status(201).json({msg: usercreated,
        token: await usercreated.generateToken(),
        UserId:usercreated._id.toString(),
        })   
    } catch (error) {
        res.status(500).json("internal error");
    }
   
}

//login controller

const login =async (req,res)=>{
    try {
        const {email,password} =req.body;
        
        console.log(req.body)
const userExisted=await User.findOne({email});
if(!userExisted){
    return res.status(400).json({message:"invalid credentials"})};

    //const passwordmatch=await bcrypt.compare(password, userExisted.password)
const passwordmatch =await userExisted.comparePassword(password);
    if(passwordmatch){
        res.status(201).json({
            msg:"login succesfull",
            token:await userExisted.generateToken(),
            UserId:userExisted._id.toString(),
        });
    }else{
        res.status(401).json({message:"invalid email or password"});
    }

    } catch (error) {
       console.log(error);
       res.status(500).json("internal error"); 
    }
}



//forgot password





module.exports ={home,register,login};