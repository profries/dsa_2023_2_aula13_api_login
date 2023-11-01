const express = require('express');
const loginController = require("../controller/login_controller")
const router = express.Router();

router.post('/', loginController.realizarLogin);

module.exports = router;