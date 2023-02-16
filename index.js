const express = require("express");
const app = express();
const port = 4000;
const bodyParser = require("body-parser");
const expenseRouter = require("./api/v1/expense/routes");

app.use(bodyParser.json());
app.use(expenseRouter);

app.listen(port, () => {
  console.log("server jalan");
});
