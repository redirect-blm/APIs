//TODO: any data validation would happen within the routes

const express = require("express");
const router = express.Router();
const Business = require('../../../db/models/businesses');

router.get("/test", (req, res) => {
    res.json({ msg: "Welcome to businessess" });
});

router.get("/getAll", (req, res) => {
  Business.findAll()
      .then((Businesses) => res.json(Businesses))
      .catch((err) =>
          res
          .status(404)
          .json({ noBusinessesFound: "No Businesses found in the DB" })
  );
});

router.get("/getThree", (req, res) => {
  Business.findAll({limit: 3})
    .then((Businesses) => res.json(Businesses))
    .catch((err) =>
      res
        .status(404)
        .json({ noBusinessesFound: "No Businesses found in the DB" })
    );
});


router.post("/byCategory", (req, res) => {
  Business.findAll({
    where: {
      type: req.body.category,
    },
  }).then((Businesses) => res.json(Businesses))
    .catch((err) =>
      res.status(404).json({ noBusinessesFound: "No Businesses found in the DB" })
    );
});

// router.get("/addBusiness", (req, res) => {});
// router.get("/updateBusiness", (req, res) => {});
// router.get("/deleteBusiness", (req, res) => {});

module.exports = router;
