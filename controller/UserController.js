const User = require("../models/User")

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Client = require("../models/Client");

module.exports = {
  // craete user
  getallusers: (req, res) => {
    User.find({}, (err, users) => {
      if (users.length <= 0) {
        res.status(500).json({
          message: "no users in system ",
          data: null,
        });
      } else {
        res.status(200).json({
          message: "users in system ",
          data: users,
        });
        
      }
    });
  },


  createuser: async(req, res) => {
    const { name, email, password } = req.body;

   

    try {
  
      {/*const user =  User.findOne({ email:req.body.email });
      console.log(user)
    if (user) throw Error("User already exists");*/}
          
      const newUser = new User({
        name,
        email,
        password,
      });

      const savedUser = newUser.save();
      console.log(newUser)
      if (!savedUser) throw Error("Something went wrong saving the user");

      

      res.status(200).json({
        message: "user successfuly registred",
        user: savedUser,
      });
    } catch (e) {
      res.status(400).json({ error: e.message });
    }
  },




  deleteuser: (req, res) => {
    User.findByIdAndDelete({ _id: req.params.id }, (err, user) => {
      if (err) 
      {
        res.status(500).json({
          message: "user not deleted ",
          data: null,
          status: 500,
        });
      } 
      else
      {
        res.status(200).json({
          message: "user deletd successfuly ",
          data: null,
          status: 200,
        });
      }
    }); 
    
  },


  authenticate: (req, res) => {
    const { email, password } = req.body;
    // Simple validation
    if (!email || !password) 
    {
      return res.status(500).json({ message: "Please enter all fields" });
    } 
    else
     {
      User.findOne({ email: email }, async (err, user) => {
        if (!user)
         {
          res.status(500).json({
            message: "user with this email does not exist",});
          
        } 
        else
         {

          User.findOne({ password: password }, async (err, user) => {


          if (!user)
           {
            res.status(500).json({
              message: "invalid password",
            });
          }
           else
           {
            res.status(200).json({
              user: user,
            });
          }
        });
        }
      });
    }
  },


 /* updateuser : (req , res) => {
   Client.findByIdAndUpdate(
      { _id: req.params.id }  ,
   
      { solde:req.body.solde}, (err, user) => {
      if (err) {
        res.status(500).json({
          message: "error updating user",
        });
      } else {
        res.status(200).json({
          message: "succesfuly updating user",
        });
      }
    });
  }
*/

updateuser: (req, res) => {
       
  Client.findByIdAndUpdate(

    { _id: req.params.id },
    { solde: req.body.solde }, 
   
    (err, user) => {
     
      if (err) {
        res.status(500).json({
          message: "user not updated " + err,
          data: null,
        });
      } else {
          
        res.status(200).json({
          message: "succesfuly updating user"
        })
      }
    }
  );


},






  
  

};