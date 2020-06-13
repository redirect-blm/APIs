const express = require("express");
const router = express.Router();
const BoycottList = require("../../../db/models/boycottLists");

router.get("/test", (req, res) => {
  res.json({ msg: "Testing BoycottList" });
});

router.get("/getAll", (req, res) => {
  BoycottList.findAll()
    .then((boycottList) => res.json(boycottList))
    .catch((err) =>
      res
        .status(404)
        .json({ noBoycottListFound: "No BoycottList found" })
    );
});

module.exports = router;
