const express = require("express");
const incomeRouter = require("./routes/incomeRouter");
const expenditureRouter = require("./routes/expenditureRouter")
const dotenv = require("dotenv");
const mongo = require("./shared/connect");
const cors = require("cors");

const app = express();
app.use(express.json());
dotenv.config();
mongo.connect();
app.use(cors());

app.use("/", (req, res, next) => {
    console.log("hello middleware");
    next();
});

app.use("/income", incomeRouter);
app.use("/expenditure", expenditureRouter);

app.listen(process.env.PORT || 3001);
