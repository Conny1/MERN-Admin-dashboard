import express from "express";
import { getAlladmins, getAllclients } from "../controlers/users.js";

const route = express.Router()

route.get("/clients", getAllclients)

route.get("/admins", getAlladmins)

export default route