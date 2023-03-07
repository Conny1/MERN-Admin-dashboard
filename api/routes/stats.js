import express from "express";
import { getaffiliate, getOverralStats, getprodStats } from "../controlers/stats.js";


const route = express.Router()

route.get("/products", getprodStats  )

route.get("/overal", getOverralStats )

route.get("/affiliate", getaffiliate )

export default route