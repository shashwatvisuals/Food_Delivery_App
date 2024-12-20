import express from "express"
import cors from "cors"
import {connectDB} from "./config/db.js"
import userRouter from "./routes/userRoute.js"
import 'dotenv/config'
import protectedRouter from "./routes/protectedRoute.js";
import foodRouter from "./routes/foodRoute.js"
import orderRouter from "./routes/orderRoute.js"

const allowedOrigins = ['https://food-delivery-frontend-b7q4.onrender.com'];

// const allowedOrigins = ['http://localhost:5173'];

// //app config
const app = express()
const port = process.env.PORT || 4000;

//middleware
app.use(express.json())
app.use(cors({
    origin: function (origin, callback) {
      if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
  }));


//DB connection
connectDB();


//api endpoints
app.use("/api/food",foodRouter)
app.use("/api/user", userRouter)
app.use("/api/order", orderRouter)
app.use("/api/protected", protectedRouter);


app.get("/", (req,res) => {
    res.send("API Working")
})

app.listen(port,() => {
    // console.log(`server started on http://localhost:${port}`)
})
