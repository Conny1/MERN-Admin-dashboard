import express from "express";
import { getAlladmins, getAllclients, getDashboardStats } from "../controlers/users.js";

const route = express.Router()

route.get("/clients", getAllclients)

route.get("/admins", getAlladmins)

route.get("/dashboard", getDashboardStats)

export default route