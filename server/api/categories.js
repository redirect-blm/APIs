const express = require("express");
const router = express.Router();
const ProductCategory = require("../../db/models/productCategories");

router.get("/test", (req, res) => {
  res.json({ msg: "Welcome to categories" });
});

router.get("/getAll", (req, res) => {
  ProductCategory.findAll()
    .then((Categories) => res.json(Categories))
    .catch((err) =>
      res
        .status(404)
        .json({ noCategoriesFound: "No Categories found for this location" })
    );
});

module.exports = router;
