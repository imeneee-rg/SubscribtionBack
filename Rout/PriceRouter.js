const express = require("express");

const route = express.Router();
const PriceController = require("../controller/PriceController")
const isAdmin=require("../midleware/isAdmin")


route.post("/",PriceController.createPrice);

route.get("/:product/:period",PriceController.getprice);


module.exports = route;