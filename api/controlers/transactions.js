import Transaction from "../models/transactions.js"
import {createError} from  "../error.js"

// get transactions
 export const gettransactions =async( req,resp, next )=>{

    try {
        const resuts =  await Transaction.find()
    if(!resuts) next(createError(404, "Not Found"))
    resp.status(200).json(resuts)
        
    } catch (error) {
        next(error)
        
    }
}