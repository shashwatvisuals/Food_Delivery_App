// const mongoose = require("mongoose");

// const connectDB = async () => {
//     await mongoose.connect(process.env.MONGODB_ATLAS_URL).then( () =>console.log("DB Connected"))
//     .catch( (err) =>console.log(err))
// }

// module.exports = "connectDB";


//mongodb+srv://shashwat:myapp@myapp.jjkki.mongodb.net/?retryWrites=true&w=majority&appName=MyApp


//-----------------------------------


// import mongoose from "mongoose";
// export const connectDB = async () => {
//     await mongoose.connect('mongodb+srv://sm7309700:sm7309700@newcluster.jv2ui.mongodb.net/food-del?retryWrites=true&w=majority&appName=NewCluster').then( () => console.log("DB Connected"))
// }

//-------------------------

import mongoose from 'mongoose';

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB Connected');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1);
  }
};

// export default connectDB;



