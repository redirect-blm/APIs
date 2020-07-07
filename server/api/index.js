const router = require('express').Router();

router.use('/businesses', require('./businesses'));
router.use('/categories', require('./categories'));
router.use('/boycottList', require('./categories'));
router.use('/keys', require('./keys'));

router.use((req, res, next) => {
  const err = new Error('API route not found');
  res.status(404);
  next(err);
});

module.exports = router;