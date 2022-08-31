
const Period =require("../models/Period");
const Price = require("../models/Price");


module.exports={


    createPrice: (req, res) => {

      let data= {
         price:req.body.price,
         product:req.body.product,
         periods:req.body.periods,
      }
        Price.create(data, (err, price) => {
          if (err) {
            res.status(500).json({
              message: "price not created " + err,
              data: null,
            });
          } else {
          {/*  Inscription.findOneAndUpdate(
              { _id: req.body.inscription },
              { $push: { periods: period._name } },
              (error, user) => {
             if (error) {
                  res.status(500).json({
                    message: "period added but not pushed in inscription ",
                    data: null,
                  });
                } else {
                  res.status(200).json({
                    message: "period added and pushed in inscription ",
                    data: null,
                  });
                }
              }
            );*/}
            res.status(500).json({
              message: "creation success ",
              data: null,
            });
          }
        });
      },



      getprice: (req, res) => {
       
        Price.findOne({ product: req.params.product, periods: req.params.period })
          
          .then((prices) => {
            res.status(201).json({
              message: "period in system ",
              data: prices,
            });
            //console.log("#####"+JSON.stringify(prices));
          })
          .catch((err) => {
            res.status(500).json({
              message: "no such period in system",
              data: null,
            });
          });
      },
}
