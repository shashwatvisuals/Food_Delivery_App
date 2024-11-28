const express = require("express");

const cors = require("cors");
const { connectDB } = require("./config/db.js");

const app = express();
app.use(express.json());
app.use(cors());

// MongoDB connection
// mongoose
//   .connect("mongodb://localhost:27017/signupDB", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => console.log("Connected to MongoDB"))
//   .catch((err) => console.error("Error connecting to MongoDB:", err));

//DB connection
connectDB

app.get("/", (req, res) => {
    res.send("API Working")
})

// // User schema
// const userSchema = new mongoose.Schema({
//   name: String,
//   phone: String,
//   email: String,
//   password: String,
// });

// const User = mongoose.model("User", userSchema);

// // Routes
// app.post("/api/signup", async (req, res) => {
//   const { name, phone, email, password } = req.body;
//   try {
//     const newUser = new User({ name, phone, email, password });
//     await newUser.save();
//     res.status(201).send("User registered successfully");
//   } catch (error) {
//     res.status(500).send("Error registering user: " + error.message);
//   }
// });

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});


//mongodb+srv://User:<db_password>@cluster0.jjkki.mongodb.net/?