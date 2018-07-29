const mongoose = require('mongoose');
const models = require('../models/user');

//Module revealing pattern
module.exports = {
    registerUser: async (req, res) => {
        // Handle the req and send the response
        try {
            let user;
            console.log(req.body);
            
            if (req.body.dp) {
                user = new models.User({
                    name: req.body.name,
                    description: req.body.description,
                    dp: { data: req.body.dp.split(',')[1], contentType: req.body.dp.split(';')[0].split(':')[1] },
                    state: req.body.state,
                    age: req.body.age,
                    ethnicity: req.body.ethnicity,
                    race: req.body.race,
                    sex: req.body.sex,
                    height: req.body.height,
                    weight: req.body.weight
                });
            }
            else {
                user = new models.User({
                    name: req.body.name,
                    description: req.body.description,
                    state: req.body.state,
                    age: req.body.age,
                    ethnicity: req.body.ethnicity,
                    race: req.body.race,
                    sex: req.body.sex,
                    height: req.body.height,
                    weight: req.body.weight
                });
            }
            user.save((err, data) => {
                if (err)
                    throw err;
                res.status(201).send({ message: "Success", user: data });
            })
        } catch (err) {
            console.log(err);
            
            res.status(503).send({ message: "Some error occured" })
        }

    }
}