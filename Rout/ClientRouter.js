const express = require("express");

const route = express.Router();
const ClientController = require("../controller/ClientController");


route.post("/",ClientController.createclient);

module.exports = route;