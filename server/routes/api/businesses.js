//TODO: any data validation would happen within the routes

const express = require("express");
const router = express.Router();
const Business = require('../../../db/models/businesses');

router.get("/test", (req, res) => {
    res.json({ msg: "Welcome to businessess" });
});

router.get("/test2", (req, res) => {
    res.json({ msg: "Another route" });
});

router.get("/getAll", (req, res) => {
    // res.json({ msg: "All businesses" });
    Business.findAll()
        .then((Businesses) => res.json(Businesses))
        .catch((err) =>
            res
            .status(404)
            .json({ noBusinessesFound: "No Businesses foundin DB" })
    );
});


// router.get("/getBusiness/:id", (req, res) => {});
// router.get("/addBusiness", (req, res) => {});
// router.get("/updateBusiness", (req, res) => {});
// router.get("/deleteBusiness", (req, res) => {});

module.exports = router;
