import express from "express";
import { gettransactions } from "../controlers/transactions.js";

const route = express.Router()

route.get("/", gettransactions)


export default route