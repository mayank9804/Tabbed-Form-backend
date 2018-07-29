const express = require('express')
const generalController = require('../controllers/general');
const generalRoutes = express.Router();

function routes(){

    generalRoutes.route('/fetchprofiles')
        .get(generalController.fetchProfiles)

    return generalRoutes;
}

module.exports = routes();

