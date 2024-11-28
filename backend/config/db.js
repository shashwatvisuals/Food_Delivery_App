const mongoose = require("mongoose");

const connectDB = async () => {
    await mongoose.connect(process.env.MONGODB_ATLAS_URL).then( () =>console.log("DB Connected"))
    .catch( (err) =>console.log(err))
}

module.exports = "connectDB";


//mongodb+srv://shashwat:myapp@myapp.jjkki.mongodb.net/?retryWrites=true&w=majority&appName=MyApp