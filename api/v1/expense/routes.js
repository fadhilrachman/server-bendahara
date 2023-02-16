const express = require("express");
const router = express();
const {
  getAllData,
  createData,
  getOne,
  update,
  destroy,
} = require("./controller");

router.get("/expense", getAllData);
router.post("/expense", createData);
router.get("/expense/:id", getOne);
router.put("/expense/:id", update);
router.delete("/expense/:id", destroy);

module.exports = router;
