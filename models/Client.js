const mongoose = require("mongoose");
const User = require("../models/User");

const clientSchema = new mongoose.Schema({
    cin: {
      type: Number,
      
    },
  
    phone: {
      type: Number,
    },
    solde: {
      type: Number,
      required: true,
      default:0,
      
    },
    inscriptions: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Inscription",
        }, 
      ],
  });
  
module.exports = User.discriminator("client", clientSchema);