import express from "express"
import cors from "cors"
import {connectDB} from "./config/db.js"
import userRouter from "./routes/userRoute.js"
import 'dotenv/config'
import foodRouter from "./routes/foodRoute.js"


//app config
const app = express()
const port = 4000

//middleware
app.use(express.json())
app.use(cors())


//DB connection
connectDB();


//api endpoints
app.use("/api/food",foodRouter)
app.use("/api/user", userRouter)


app.get("/", (req,res) => {
    res.send("API Working")
})

app.listen(port,() => {
    console.log(`server started on http://localhost:${port}`)
})
