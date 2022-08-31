const mongoose = require("mongoose");

const InscriptionSchema = new mongoose.Schema({
    client: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: false,
      },

    status : {
        type: Number,
        default: 1,
    },

    type : {
        type :String,
        required : true

    },
    price :{
        type:Number,
        required : false,
        default : 0,
    },

    periods: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Period",
      },

    ],
      products:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Product",
          },

      ]


}
,{ timestamps: true })


module.exports = mongoose.model("Inscription", InscriptionSchema);