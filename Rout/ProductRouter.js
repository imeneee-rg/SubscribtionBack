const express = require("express");

const route = express.Router();
const ProductController = require("../controller/ProductController");
const isAdmin=require("../midleware/isAdmin")

route.post("/",ProductController.createProduct);
route.delete("/:id",ProductController.deleteproduct);
route.get("/",ProductController.getalllproducts);
route.put("/:id/",ProductController.updateproductinfo);

module.exports = route;