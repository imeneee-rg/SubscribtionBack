const User = require("../models/User");


function isAdmin(req, res, next) 
{
try {
  console.log("hi");
    User.findById({ _id: req.params.id }, (err, user) => {
      console.log("hi");
        if (!user) {
          res.status(400).json({ msg: "user  is not exist" });
        } else {
          if (user.__t === "admin") {
            next();
          } else {
            res.status(400).json({ msg: "you are not admin !" });
          }
        }
      });
} 
catch (e) 
{
    res.status(400).json({ msg: e.message });
    
}


}
module.exports = isAdmin;