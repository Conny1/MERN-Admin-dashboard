import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import helmet from "helmet"
import morgan from "morgan";
import bodyParser from "body-parser";
import cors from "cors"
import UsertRoute from "./routes/users.js"
import transactionsRoute from "./routes/transactions.js"
import productRoute from "./routes/product.js"

import Product from "./models/Product.js";
import { dataProduct, dataTransaction, dataUser } from "./data/index.js";
import User from "./models/user.js";
import Transaction from "./models/transactions.js";

// CONFIGURATIONS
dotenv.config()
const port = process.env.PORT_ID || 4500

const app = express()
app.use(express.json())
app.use(helmet())
app.use(helmet.crossOriginResourcePolicy({policy:"cross-origin"}))
app.use( morgan("common") )
app.use(bodyParser.json())
app.use( bodyParser.urlencoded({extended:false}) )
app.use(cors())

const connect= async ()=>{
  //  await mongoose.connect(process.env.MONGO_URL)
  await mongoose.connect(`mongodb://127.0.0.1:27017/admindash`)
    console.log("connected to mongoDB")
    console.log("insert is  starting")
    // await Product.insertMany( dataProduct )
    // await User.insertMany( dataUser )
    // await Transaction.insertMany( dataTransaction )

    console.log("insert finished")
  }

//   routes
  app.use("/user", UsertRoute ) 
  app.use("/transactions", transactionsRoute )
  app.use("/products", productRoute )
  


app.use((err,req,resp, next)=>{
  const errmessage = err.message
  const errstatus = err.status
  return resp.json(errstatus).json({
    success:false,
    status:errstatus,
    message:errmessage,
    stack:err.stack
  })
})

  app.listen(port, ()=>{
    console.log("connected to backend")
    connect()
  })
