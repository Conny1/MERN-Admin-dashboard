import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import helmet from "helmet"
import morgan from "morgan";
import bodyParser from "body-parser";
import cors from "cors"
import clientRoute from "./routes/client.js"
import generalRoute from "./routes/general.js"
import managementRoute from "./routes/management.js"
import salesRoute from "./routes/sales.js"

// CONFIGURATIONS
const port = process.env.PORT || 4500
dotenv.config()
const app = express()
app.use(express.json())
app.use(helmet())
app.use(helmet.crossOriginResourcePolicy({policy:"cross-origin"}))
app.use( morgan("common") )
app.use(bodyParser.json())
app.use( bodyParser.urlencoded({extended:false}) )
app.use(cors())

const connect= async ()=>{
   await mongoose.connect(process.env.MONGO_URL)
    console.log("connected to mongoDB")
  }

//   routes
  app.use("/client", clientRoute )
  app.use("/general", generalRoute )
  app.use("/management", managementRoute )
  app.use("/sales", salesRoute )


  app.listen(port, ()=>{
    console.log("connected to backend")
    connect()
  })
