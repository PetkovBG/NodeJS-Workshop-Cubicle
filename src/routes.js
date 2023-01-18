const router = require('express').Router();
const cubeController = require('./controllers/cubeController');


const homeController = require('./controllers/homeController');

//The above router setup can be done with the method below
// const express = require('express');
// const Router = express.Router;
// const router = Router();

router.get('/', homeController.getHomePage);

router.get('/about', homeController.getAboutPage);

router.get('/create', cubeController.getCreateCube);

module.exports = router;
