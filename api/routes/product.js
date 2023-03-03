import express from "express";
import { getAllproducts } from "../controlers/products.js";

const route = express.Router()

route.get("/", getAllproducts)



export default route