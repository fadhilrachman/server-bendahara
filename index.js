const express = require("express");
const app = express();
const port = `https://lucky-blancmange-37d140.netlify.app` || 400;
const bodyParser = require("body-parser");
const expenseRouter = require("./api/v1/expense/routes");
const incomeRouter = require("./api/v1/income/routes");
const cors = require("cors");

app.use(
  cors({
    origin: "*",
  })
);
app.use(bodyParser.json());
app.use(incomeRouter);
app.use(expenseRouter);

app.listen(port, () => {
  console.log("server jalan");
});
