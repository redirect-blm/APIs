const express = require("express");
const router = express.Router();
const BoycottList = require("../../db/models/boycottLists");

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

router.get("/getThree", (req, res) => {
  BoycottList.findAll(
    {limit: 3}
  )
    .then((boycottList) => res.json(boycottList))
    .catch((err) =>
      res.status(404).json({ noBoycottListFound: "No BoycottList found" })
    );
});


router.get("/getByName/:businessName", (req, res) => {
  BoycottList.findAll({
    where: { businessName: req.params.businessName },
  })
    .then((boycottList) => res.json(boycottList))
    .catch((err) =>
      // res.status(404).json({ companyStatus: "This company is not boycotted" })
      res.status(404).json({ companyStatus: req.body.businessName })
    );
});

module.exports = router;
