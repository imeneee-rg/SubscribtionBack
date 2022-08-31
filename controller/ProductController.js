
const Product = require("../models/Product")
const Inscription=require("../models/Inscription");
const Price = require("../models/Price");
const Period = require("../models/Period");

module.exports = {


  createProduct: (req, res) => {
    Product.create(req.body, (err, product) => {
      if (err) {
        res.status(500).json({
          message: "product not created " + err,
          data: null,
        });
      } else {
        Inscription.findOneAndUpdate(
          { _id: req.body.inscription },
          { $push: { products: product._id } },
          (error, user) => {
            if (error) {
              res.status(500).json({
                message: "productadded but not pushed in inscription ",
                data: null,
              });
            } else {
              
              {
                let o;
                Object.keys(req.body.prices).map((object)=>{
                o=object;
                //console.log("--------"+JSON.stringify(req.body.prices[o]));
                Price.create(
                  {periods:req.body.prices[o].id
                  ,product:product._id,
                  price:req.body.prices[o].value
                  });
            })}
              
              res.status(200).json({
                message: "product added and pushed in inscription ",
                data: null,
              });
            }
          }
        );
      }
    });
  },



      deleteproduct: (req, res) => {
        Product.findByIdAndDelete({ _id: req.params.id }, (err, product) => {
          if (!product) {
            res.status(500).json({
              message: "product not exist " + err,
              data: null,
            });
          } else {
            res.status(201).json({
              message: "product deleted successfuly ",
              data: product,
            });
          }
        });
      },



      getalllproducts: (req, res) => {
        Product.find({ })
          
          .then((products) => {
            res.status(201).json({
              message: "product in system ",
              data: products,
            });
          })
          .catch((err) => {
            res.status(500).json({
              message: "no such product in system",
              data: null,
            });
          });
      },


      updateproductinfo : (req , res) => {
        Product.findByIdAndUpdate({ _id: req.params.id }, req.body, (err, product) => {
          if (err) {
            res.status(500).json({
              message: "error updating product",
            });
          } else {
            res.status(200).json({
              message: "succesfuly updating product",
            });
          }
        });
      }

}