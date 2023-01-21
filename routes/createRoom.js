// const { json } = require("express");

const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Fetch all rooms");
});

router.post("/", (req, res) => {
  console.log(req.body);

  res.end();
});

module.exports = router;
