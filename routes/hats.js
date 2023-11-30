var express = require('express');
const hat_controlers= require('../controllers/hat');
var router = express.Router();
// A little function to check if we have an authorized user and continue on 
// or
// redirect to login.
const secured = (req, res, next) => {
 if (req.user){
 return next();
 }
 res.redirect("/login");
 }
/* GET costumes */
router.get('/', hat_controlers.hat_view_all_Page );
router.get('/detail',secured, hat_controlers.hat_view_one_Page);
router.get('/create',secured, hat_controlers.hat_create_Page);
router.get('/update',secured, hat_controlers.hat_update_Page);
router.get('/delete',secured, hat_controlers.hat_delete_Page);

module.exports = router