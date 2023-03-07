import User from "../models/user.js"
import {createError} from  "../error.js"

// get clients
 export const getAllclients =async( req,resp, next )=>{

    try {
        const resuts =  await User.find({role:"user"}).select("-password");
    if(!resuts) next(createError(404, "Not Found"))
    resp.status(200).json(resuts)
        
    } catch (error) {
        next(error)
        
    }
}

// getadmins
export const getAlladmins =async( req,resp, next )=>{

    try {
        const resuts =  await User.find({role:"admin"}).select("-password");
    if(!resuts) next(createError(404, "Not Found"))
    resp.status(200).json(resuts)
        
    } catch (error) {
        next(error)
        
    }
}