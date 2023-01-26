const router = require('express').Router();

const Accessory = require('../models/Accessory');

//URL: /accessories/create
router.get('/create', (req, res) => {
    res.render('accessory/create');
    
}); //this comes after /accessory so /accessory/create. The first part is stripped. 

router.post('/create', async (req, res) => {
    const { name, description, imageUrl} = req.body;

    try {
        await Accessory.create({ name, description, imageUrl });
    } catch(err) {
        console.log(err.message);
        return res.redirect('/404');
    }

    res.redirect('/');
})

module.exports = router;