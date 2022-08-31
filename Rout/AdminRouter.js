const express = require("express");

const route = express.Router();
const AdminController = require("../controller/AdminController");


route.post("/",AdminController.createadmin);

module.exports = route;
