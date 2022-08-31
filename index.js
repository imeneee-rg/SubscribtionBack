const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const db = require('./config/database')
const cors = require('cors')



app.use(express.urlencoded({ extended: false }));

// parse application/json
app.use(express.json());

app.use(cors())



const userrouter = require("./Rout/userrouter");
const clientrouter=require("./Rout/ClientRouter");
const adminrouter=require("./Rout/AdminRouter");
const inscriptionrouter=require("./Rout/InscriptionRouter");
const productsrouter=require("./Rout/ProductRouter");
//const walletrouter=require("./Rout/WalletRouter");
const periodrouter=require("./Rout/PeriodRouter");
const pricerouter=require("./Rout/PriceRouter");

app.use("/users",userrouter);
app.use("/admins",adminrouter);
app.use("/clients",clientrouter);
app.use("/inscriptions",inscriptionrouter);
app.use("/products",productsrouter);
//app.use("/wallets",walletrouter);
app.use("/periods",periodrouter);
app.use("/prices",pricerouter);





app.listen(5000, () => {
  console.log("server is runing on port 5000");
});