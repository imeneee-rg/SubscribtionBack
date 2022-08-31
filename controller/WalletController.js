{/*const Wallet=require("../models/Wallet");
const User=require("../models/User")


module.exports = {


    getSoldByIdClient :(req,res)=> {
        Wallet.find({ client: req.params.id }, (err, wallets) => {
           
            if (err) {
              res.status(500).json({
                message : 'no wallets',
                data : []
              })
            } else {
              res.status(200).json({
                message:"user wallets",
                data: wallets ,
              });
            }
          });
      },


      createWallet: (req, res) => {
        Wallet.create(req.body, (err, wallet) => {
          if (err) {
            res.status(500).json({
              message: "wallet  not created " + err,
              data: null,
            });
          } else {
            User.findOneAndUpdate(
              { _id: req.body.client, __t: "client" ,solde: req.body.client},
             
              { $push: { wallets:{ _id :wallet._id ,solde:wallet.solde} }},
              
              (error, user) => {
                if (error) {
                  res.status(500).json({
                    message: "wallet added but not pushed in user  ",
                    data: null,
                  });
                } else {
                  res.status(200).json({
                    message: "wallet added and pushed in user  ",
                    data: null,
                  });
                }
              }
            );
          }
        });
      },

   
    





 
}   */}