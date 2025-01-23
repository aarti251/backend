const express =require("express");
const router=express.Router();
const usercontroller =require("../controllers/user-controller");
const signUpSchema =require("../validaters/user-validater")
const validate =require("../middlewares/uservalidater-middleware")
router.route("/").get(usercontroller.home);

router.route("/register").post(validate(signUpSchema),usercontroller.register);
router.route("/login").post(usercontroller.login);



   module.exports=router;