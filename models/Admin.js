const mongoose = require("mongoose");
const User = require("../models/User");
const AdminSchema = new mongoose.Schema({
    about: {
      type: String,
    },
});

module.exports = User.discriminator("admin", AdminSchema);