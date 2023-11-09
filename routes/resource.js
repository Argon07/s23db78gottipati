var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var hat_controller = require('../controllers/hat');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// COSTUME ROUTES ///
// POST request for creating a Costume. 
router.post('/hat', hat_controller.hat_create_post);
// DELETE request to delete Costume.
router.delete('/hat/:id', hat_controller.hat_delete);
// PUT request to update Costume.
router.put('/hat/:id', hat_controller.hat_update_put);
// GET request for one Costume.
router.get('/hat/:id', hat_controller.hat_detail);
// GET request for list of all Costume items.
router.get('/hat', hat_controller.hat_list);
module.exports = router