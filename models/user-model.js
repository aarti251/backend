const mongoose =require("mongoose");
const bcrypt =require("bcryptjs");
const jwt =require("jsonwebtoken");
const userSchema =new mongoose.Schema({
    username:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    phone:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    isAdmin:{
        type:Boolean,
        default:false,
    },
});




//premethod bcryptjs
userSchema.pre("save",async function(){
   // console.log("pree",this);
const User=this;
if(!User.isModified("password")){
    next()
}

try {
 const saltRound =await bcrypt.genSalt(10);
 const hash_password =await bcrypt.hash(User.password,saltRound);
  User.password=hash_password;  

} catch (error) {
    next(error)
}
})

//compare password
userSchema.methods.comparePassword= async function(password){
return bcrypt.compare(password, this.password)
    
}

//jsonwebtoken


userSchema.methods.generateToken = async function(){

try {

return jwt.sign({
    UserId:this._id.toString(),
    email:this.email,
    isAdmin:this.isAdmin,

},
process.env.JWT,
{
    expiresIn:"30d",
}

);

    
} catch (error) {
  console.log(error)  
}


}

//define model name

const User = new mongoose.model("User",userSchema);

module.exports = User