const router = require('express').Router()

router.use('/auth', require("./auth.routes"))
// router.use('/project', require("./projects.routes"))
// router.use('/foundation', require("./foundation.routes"))

module.exports = router;