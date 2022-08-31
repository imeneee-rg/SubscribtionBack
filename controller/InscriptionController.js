const Client = require("../models/Client");
const Inscription = require("../models/Inscription")
const User=require("../models/User")
module.exports=
{

  createInscription: (req, res) => {

    console.log(req.body);
    let data = {
      client:req.body.client,
      type: req.body.type,
      periods: req.body.periods,
      products: req.body.products,
      price: req.body.price,
     
      
    };
   
  
    console.log("#####"+JSON.stringify(req.body.price));
  
    Inscription.create(data, (err, inscription) => {
      if (err) {
        res.status(500).json({
          message: "inscription not created " + err,
          data: null,
        });
      } else {
        User.findOneAndUpdate(
          { _id: req.body.client, __t: "client" },
          { $push: { inscriptions: inscription._id } },
         
          (error, user) => {
            if (error) {
              res.status(500).json({
                message: "inscription added but not pushed in user  ",
                data: null,
              });
            } else {
             console.log("#####"+JSON.stringify(User.solde))
              res.status(200).json({
                message: "inscription added and pushed in user  ",
                data: null,
              });
            }
          }
        );
      }
    });
  },



      getall: (req, res) => {
        Inscription.find({})
          .populate({
            path: "client",
          }) 
          

          .then((inscriptions) => {
            res.status(200).json({
              message: "inscriptions in system ",
              data: inscriptions,
            });
          })
          .catch((err) => {
            res.status(500).json({
              message: "no inscriptions from systemm ",
              data: null,
            });
          });
      },




      getInscriptionByIdClient :(req,res)=> {
        Inscription.find({ client: req.params.id }, (err, inscriptions) => {
            console.log('hi');
            if (err) {
              res.status(500).json({
                message : 'no inscriptions',
                data : []
              })
            } else {
              res.status(200).json({
                message:"user inscriptions",
                data: inscriptions,
              });
            }
          });
      },


      deleteInscription: (req, res) => {
        Inscription.findByIdAndDelete({ _id: req.params.id }, (err, Inscription) => {
          if (err) {
            res.status(500).json({
              message: "error deleting Inscription",
              data: null,
            });
          } else {
            res.status(200).json({
              message: "success deleting Inscription",
              data: null,
            });
          }
        });
      },



      updateInscription: (req, res) => {
       
            Inscription.findByIdAndUpdate(

              { _id: req.params.id },
              { status: req.body.status }, //bch nbadel ken status
             
              (err, inscription) => {
               
                if (err) {
                  res.status(500).json({
                    message: "inscription not updated " + err,
                    data: null,
                  });
                } else {
                    
                  Inscription.findById({ _id: req.params.id })
                    .populate({ path: "client" })
                   
                    .then((inscriptions) => {
                      res.status(200).json({
                        message: "inscription ",
                        data: inscriptions,
                      });
                      PopulateRes(inscriptions);
                    })
                    .catch((err) => {
                      res.status(500).json({
                        message: "error updateing",
                        data: null,
                      });
                    });
                }
              }
            );
        
        
      },

     
      
}
