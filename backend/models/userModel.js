import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phone: { 
    type: String, 
    required: true,
    unique: true,
    match: [/^\d{10}$/, 'Please enter a valid 10-digit phone number'] 
  },
  cartData: {type:Object,default:{}}
},{minimize:false});

const userModel = mongoose.models.user || mongoose.model("user", userSchema)

export default userModel;
