const express = require("express");
const router = express();
const {
  getAllData,
  createData,
  getOne,
  update,
  destroy,
} = require("./controller");

router.get("/income", getAllData);
router.post("/income", createData);
router.get("/income/:id", getOne);
router.put("/income/:id", update);
router.delete("/income/:id", destroy);

module.exports = router;
