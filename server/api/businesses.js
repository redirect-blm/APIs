const express = require('express');
const router = express.Router();
const Business = require('../../db/models/businesses');

router.get('/test', (req, res) => {
  res.json({ msg: 'Welcome to businessess' });
});

router.get('/getAll', (req, res) => {
  Business.findAll()
    .then(Businesses => res.json(Businesses))
    .catch(err =>
      res
        .status(404)
        .json({ noBusinessesFound: 'No Businesses found in the DB' })
    );
});

router.get('/getThree', (req, res) => {
  Business.findAll({ limit: 3 })
    .then(Businesses => res.json(Businesses))
    .catch(err =>
      res
        .status(404)
        .json({ noBusinessesFound: 'No Businesses found in the DB' })
    );
});

router.get('/getByCategory/:category', (req, res) => {
  console.log(`finding businesses by category: ${req.params.category}`);
  Business.findAll({
    where: { category: req.params.category },
    limit: 3,
  })
    .then(Businesses => {
      console.log(`found ${Businesses.length}`)
      return res.json(Businesses);
    })
    .catch(err =>
      res
        .status(404)
        .json({ noBusinessesFound: 'No Businesses found under this category' })
    );
});

router.get('/getBySearchTerm', (req, res) => {
  Business.findAll({ limit: 3 })
    .then(Businesses => res.json(Businesses))
    .catch(err =>
      res
        .status(404)
        .json({ noBusinessesFound: 'No Businesses found in the DB' })
    );
})

// router.get("/addBusiness", (req, res) => {});
// router.get("/updateBusiness", (req, res) => {});
// router.get("/deleteBusiness", (req, res) => {});

module.exports = router;
