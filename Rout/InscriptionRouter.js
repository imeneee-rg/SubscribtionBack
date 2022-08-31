const express = require("express");

const route = express.Router();
const InscriptionController = require("../controller/InscriptionController")

route.post("/",InscriptionController.createInscription);
route.get("/",InscriptionController.getall);
route.get("/:id",InscriptionController.getInscriptionByIdClient);
route.delete("/:id",InscriptionController.deleteInscription);
route.put("/:id",InscriptionController.updateInscription);

module.exports = route;