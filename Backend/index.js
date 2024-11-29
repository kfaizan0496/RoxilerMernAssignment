const express = require("express");
const cors = require("cors");
require("dotenv").config();
const { Transaction } = require("./routes/TransactionData.Route");
const { Barchart } = require("./routes/BarChart.Route");
const { Piechart } = require("./routes/PieChartRoute");
const { combineRoute } = require("./routes/CombineRoute");
const dbConnection  = require('./Config/db');

const app = express();
app.use(cors());
app.use(express.json());
app.use("/", Transaction);
app.use("/", Barchart);
app.use("/", Piechart);
app.use("/", combineRoute);


const Port=process.env.PORT || 3000;

app.listen(Port,(req,res)=>{
    console.log(`server is running on port ${Port}`);
    dbConnection();
})