const mongoose = require("mongoose");

const PriceSchema = new mongoose.Schema({

    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
       
      },

    periods: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Period",
        },
  
      ],
      
      price :{
        type : Number,
        required : true,
        default : 0
    },

   


}) 
module.exports = mongoose.model("Price",PriceSchema);
