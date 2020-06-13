// direct queries to the appropriate route here
var express = require('express');
var router = express.Router();
const businessRouter = require('./business');

router.use('/business', businessRouter);

module.exports = router;
