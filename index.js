const express = require("express");
const app = express();
const port = `https://server-bendahara-production.up.railway.app` || 400;
const bodyParser = require("body-parser");
const expenseRouter = require("./api/v1/expense/routes");
const incomeRouter = require("./api/v1/income/routes");

app.use(bodyParser.json());
app.use(incomeRouter);
app.use(expenseRouter);

app.listen(port, () => {
  console.log("server jalan");
});
