const router = require('express').Router();

//URL: /accessory/create
router.get('/create', (req, res) => {
    res.render('accessory/create');
    
}); //this comes after /accessory so /accessory/create. The first part is stripped. 


module.exports = router;