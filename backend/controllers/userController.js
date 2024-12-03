import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken"
import bcrypt from "bcryptjs"
import validator from "validator"
import { response } from "express";

//login user
// const loginUser = async (req, res) => {
//     const {email, password} = req.body;
//     try {
//         const user = await userModel.findOne({email})

//         if (!user) {
//            return res.json({success:false,message:"User does not exist"})
//         }

//         const isMatch = await bcrypt.compare(password,user.password);
//         if (!isMatch) {
//             return res.json({success:false, message:"Invalid Credentials"})
//         }

//         const token = createToken(user._id);
//         res.json({success:true, token})

//     } catch (error) {
//         console.log(error)
//         res.json({success:false, message:"Error"})
//     }

// }

// const createToken = (id) => {
//     return jwt.sign({id}, process.env.JWT_SECRET)
// }

// Function to create a JWT token
const createToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "1h" });
  };


const loginUser = async (req, res) => {
    const { email, password } = req.body;
    try {
      const user = await userModel.findOne({ email });
  
      if (!user) {
        return res.json({ success: false, message: "User does not exist" });
      }
  
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.json({ success: false, message: "Invalid Credentials" });
      }
  
      // Create the token
      const token = createToken(user._id);
  
      // Return the token and user name
      res.json({
        success: true,
        token,
        user: {
          name: user.name, // Add user name to the response
          email: user.email,
        },
      });
    } catch (error) {
      console.log(error);
      res.json({ success: false, message: "Error" });
    }
  };
  












 


//register user
const registerUser = async (req, res) => {
    const {name, email, password,phone} = req.body;
    console.log(req.body); // Check if phone is being sent in the request
    try {
        //checking is user already exists
        const exists = await userModel.findOne({email})
        if(exists){
            return res.json({success:false,message: "User Already exists"})
        }
        //validating email format & string password
        if(!validator.isEmail(email)){
            return res.json({success:false,message: "please enter valid email"})
        }

        if (password.length<8) {
            return res.json({success:false, message:"please enter a strong password"})
        }

        //hashing user password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password,salt);
        
        const newUser = new userModel({
            name:name,
            email:email,
            password: hashedPassword,
            phone: phone
        })

        const user = await newUser.save()
        const token = createToken(user._id)
        res.json({success:true, token})

    } catch (error) {
        console.log(error)
        res.json({success:false,message:"error"})
    }
}

export {loginUser,registerUser}
