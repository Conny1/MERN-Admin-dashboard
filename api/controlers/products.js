import { createError } from "../error.js";
import Product from "../models/Product.js";

export const getAllproducts=async (req,resp,next)=>{
    try {
        const result =  await Product.find()
        if(!result) return next(createError(404,"Not Found" ))

        resp.status(200).json(result)
    } catch (error) {
        
    }
}