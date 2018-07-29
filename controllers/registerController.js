const mongoose = require('mongoose');
const models = require('../models/user');

//Module revealing pattern
module.exports = {
    registerUser: async (req, res) => {
        // Handle the req and send the response
        try {
            let user = new models.User(req.body.user);
            user.save((err, data) => {
                if (err)
                    throw err;
                res.status(201).send({ message: "Success", user: data });
            })
        } catch (err) {
            res.status(503).send({ message: "Some error occured" })
        }

    }
}