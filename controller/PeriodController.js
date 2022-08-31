const Inscription = require("../models/Inscription")
const Period =require("../models/Period")


module.exports={


    createPeriod: (req, res) => {

      let data= {
         name:req.body.name
      }
        Period.create(data, (err, period) => {
          if (err) {
            res.status(500).json({
              message: "period not created " + err,
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



      getallperiods: (req, res) => {
        Period.find({ })
          
          .then((periods) => {
            res.status(201).json({
              message: "period in system ",
              data: periods,
            });
          })
          .catch((err) => {
            res.status(500).json({
              message: "no such period in system",
              data: null,
            });
          });
      },
}
