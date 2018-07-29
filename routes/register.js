const express = require('express');
const registerRouter = express.Router();
const registerController = require('../controllers/registerController')


function routes(){

    registerRouter.route('/')
        .post(registerController.registerUser)
    

    return registerRouter;
}
module.exports = routes();