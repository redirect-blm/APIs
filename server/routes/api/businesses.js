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

router.get('/getmany/category/:category', async (req, res) => {
    const { type } = req.params;
    try {
      let businessesByCat = await (Business.findAll({ where: { type } }));
      if (!businesses) businesses = await (Business.findAll());
      return res.status(200).send(businesses)
    } catch(e) {
        console.log('ERROR getting businesses by category');
        console.log(e)
        return res.status(400).send(e);
    }
    
    
})


// router.get("/getBusiness/:id", (req, res) => {});
// router.get("/addBusiness", (req, res) => {});
// router.get("/updateBusiness", (req, res) => {});
// router.get("/deleteBusiness", (req, res) => {});

module.exports = router;
