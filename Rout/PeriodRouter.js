const express = require("express");

const route = express.Router();
const PeriodController = require("../controller/PeriodController")
const isAdmin=require("../midleware/isAdmin")


route.post("/",PeriodController.createPeriod);

route.get("/",PeriodController.getallperiods);


module.exports = route;