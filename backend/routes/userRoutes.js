const express = require('express');
const router = express.Router();
const { getAllAdmin, createAdmin } = require('../controllers/userController')
router
    .route('/')
    .get(getAllAdmin)
    .post(createAdmin)

module.exports = router;