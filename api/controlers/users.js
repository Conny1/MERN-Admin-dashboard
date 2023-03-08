import User from "../models/user.js"
import {createError} from  "../error.js"
import Transaction from  "../models/transactions.js"
import OverallStat from  "../models/overralStats.js"

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


// get general stats for dashboard
export const getDashboardStats = async (req, res) => {
  try {
    // hardcoded values
    const currentMonth = "November";
    const currentYear = 2021;
    const currentDay = "2021-11-15";

    /* Recent Transactions */
    const transactions = await Transaction.find()
      .limit(50)
      .sort({ createdOn: -1 });

    /* Overall Stats */
    const overallStat = await OverallStat.find({ year: currentYear });

    const {
      totalCustomers,
      yearlyTotalSoldUnits,
      yearlySalesTotal,
      monthlyData,
      salesByCategory,
    } = overallStat[0];

    const thisMonthStats = overallStat[0].monthlyData.find(({ month }) => {
      return month === currentMonth;
    });

    const todayStats = overallStat[0].dailyData.find(({ date }) => {
      return date === currentDay;
    });

    res.status(200).json({
      totalCustomers,
      yearlyTotalSoldUnits,
      yearlySalesTotal,
      monthlyData,
      salesByCategory,
      thisMonthStats,
      todayStats,
      transactions,
    });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};