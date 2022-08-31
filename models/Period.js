const mongoose = require("mongoose");

const PeriodSchema = new mongoose.Schema({


      name : {
        type: String,
       
    },

   


}) 
module.exports = mongoose.model("Period",PeriodSchema);
