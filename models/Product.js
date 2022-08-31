const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({

    inscription: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Inscription",
     
      },

    name : 
    { type: String,
        require : true
    },


   /*price: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Price",
        },
  
      ],
      periods: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Period",
        },
  
      ],*/
     
    quantite:
    {
        type: Number,
        require:true
    },
    
   price:
    {
        type: Number,
        require:true
    },
    description :
    {
        type: String,
        require:true
    },


}) 
module.exports = mongoose.model("Product", ProductSchema);
