import { createError } from "../error.js";
import ProductStat from "../models/productstats.js";
import OverralStats from "../models/overralStats.js";
import AffiliateStat from "../models/affiliateStats.js";
 
// products statistics
export const getprodStats = async (req,resp,next)=>{
    try {
        const results = await ProductStat.find()
        if (!results) return next(createError(404, "Not Found" ))
        resp.status(200).json(results)
        
    } catch (error) {
        next(error)
    }
}

// overral statistics
export const getOverralStats = async (req,resp,next)=>{
    try {
        const results = await OverralStats.find()
        if (!results) return next(createError(404, "Not Found" ))
        resp.status(200).json(results[0])
        
    } catch (error) {
        next(error)
    }
}

// affiliate statistics
export const getaffiliate = async (req,resp,next)=>{
    try {
        const results = await AffiliateStat.find()
        if (!results) return next(createError(404, "Not Found" ))
        resp.status(200).json(results)
        
    } catch (error) {
        next(error)
    }
}

