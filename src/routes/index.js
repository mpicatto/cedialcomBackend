const { Router } = require('express');

const mailRouter = require('./email');

const router = Router();
router.use('/email', mailRouter)

module.exports = router