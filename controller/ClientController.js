const Client = require("../models/Client");
const client = require("../models/Client");
const Inscription = require("../models/Inscription");
const User = require("../models/User");
module.exports = {
  createclient: (req, res) => {

    console.log(req.body);
    let data = {
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      solde: req.body.solde,

      password: req.body.password,
      
    };

    Client.create(data, (err, client) => {
      if (err) {
        res.status(500).json({
          message: "client not created " + err,
          data: null,
          
        });
      }  else {
        Inscription.findOneAndUpdate(
          { _id: req.body.inscription },
          { $push: { client: client._id } },
          
          (error, user) => {
            if (error) {
              res.status(500).json({
                message: "user added but not pushed in inscription ",
                data: null,
              });
            } else {
              res.status(200).json({
                message: "user added and pushed in inscription   ",
                data: user,
              });
            }
          }
        );
      }
    });
  },
};