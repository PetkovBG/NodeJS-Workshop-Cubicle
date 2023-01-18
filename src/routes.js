const cubeController = require('./controllers/cubeController');

const router = require('express').Router();

//The above router setup can be done with the method below
// const express = require('express');
// const Router = express.Router;
// const router = Router();

router.get('/', (req, res) => {
    res.render('index');
});

router.get('/about', (req, res) => {
    res.render('about');
});

// router.get('/create', (req, res) => {
//     res.render('create');
// });

router.get('./create', cubeController.getCreateCube);

module.exports = router;
