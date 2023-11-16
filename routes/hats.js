var express = require('express');
const hat_controlers= require('../controllers/hat');
var router = express.Router();
/* GET costumes */
router.get('/', hat_controlers.hat_view_all_Page );
router.get('/detail', hat_controlers.hat_view_one_Page);
router.get('/create', hat_controlers.hat_create_Page);
module.exports = router