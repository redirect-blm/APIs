var express = require('express');
var router = express.Router();
const bs = require('../controllers/businessController');

router.get("/getCategories", bs.getCategories);

router.get('/getBusinesses', bs.getBusinessList);
router.get('/getBusiness/:id', bs.getBusinessById);
router.get('/addBusiness', bs.addBusiness);
router.get('/updateBusiness', bs.updateBusiness);
router.get('/deleteBusiness', bs.deleteBusiness);

module.exports = router;
