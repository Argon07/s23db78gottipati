var hat = require('../models/hat');
// List of all Costumes
exports.hat_list= async function(req, res) {
    try{
    theCostumes = await hat.find();
    res.send(theCostumes);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    } 
   };
   
// for a specific Costume.
exports.hat_detail = function(req, res) {
 res.send('NOT IMPLEMENTED: hat detail: ' + req.params.id);
};
// Handle Costume create on POST.
exports.hat_create_post = async function(req, res) {
    console.log(req.body)
    let document = new hat();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"costume_type":"goat", "cost":12, "size":"large"}
    document.hatStyle = req.body.hatStyle;
    document.color = req.body.color;
    document.size = req.body.size;
    document.price = req.body.price;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    } 
   }
// Handle Costume delete form on DELETE.
exports.hat_delete = function(req, res) {
 res.send('NOT IMPLEMENTED: hat delete DELETE ' + req.params.id);
};
// Handle Costume update form on PUT.
exports.hat_update_put = function(req, res) {
 res.send('NOT IMPLEMENTED: hat update PUT' + req.params.id);
};
exports.hat_view_all_Page = async function(req, res) {
    try{
    theCostumes = await hat.find();
    res.render('hats', { title: 'Hat Search Results', results: theCostumes });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    } 
   }