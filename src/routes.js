const router = require('express').Router();
const cubeController = require('./controllers/cubeController');

const homeController = require('./controllers/homeController');
const accessoryController = require('./controllers/accessoryControler');

//The above router setup can be done with the method below
// const express = require('express');
// const Router = express.Router;
// const router = Router();

router.get('/', homeController.getHomePage);

router.get('/about', homeController.getAboutPage);
router.get('/404', homeController.getErrorPage);

router.get('/create', cubeController.getCreateCube);
router.post('/create', cubeController.postCreateCube);
router.get('/cubes/:cubeId/details', cubeController.getDetails);

router.get('/cubes/:cubeId/attach', cubeController.getAttachAccessory);
router.post('/cubes/:cubeId/attach', cubeController.postAttachAccessory);

router.use('/accessory', accessoryController);

module.exports = router;
