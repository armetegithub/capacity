const router = require('express').Router()

// http://localhost:4000/api/auth
router.use('/auth', require("./auth.routes"))
router.use('/projects', require("./projects.routes"));

router.use('/user', require("./user.routes"));

// http://localhost:4000/api/foundation
router.use('/foundations', require("./foundations.routes"))

module.exports = router;