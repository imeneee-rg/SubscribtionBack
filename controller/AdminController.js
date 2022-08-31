const admin = require("../models/Admin")
const User = require("../models/User");
module.exports = {
  createadmin: async (req, res) => {
    const { name, email, password } = req.body;

    if (!email || !name || !password) {
      return res.status(500).json({ message: "Please enter all fields" });
    }

    try {
     

      const newUser = new admin({
        name,
        email,
        password
      });

      const savedUser =  await newUser.save();
      if (!savedUser) return res.status(500).json({ message: "error saving the admin" });

      res.status(200).json({
        message: "admin successfuly registred",
        admin: savedUser,
      });
    } catch (e) {
      res.status(400).json({ message : "error registration failed" , error: e.message });
    }
  },
}