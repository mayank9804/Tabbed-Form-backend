const mongoose = require('mongoose');
const models = require('../models/user');

module.exports = {
    fetchProfiles: async (req, res) => {
        // Fetch profiles and send response
        let users;
        try {
            users = await models.User.find({}).select('-_id,-__v').lean();
            for (let e of users) {
                if (e.dp){
                    console.log(e.dp.data);
                    
                }
                    // e.dp.data = await Buffer.from(users.dp.data.data).toString('utf8');
            }
        } catch (error) {
            res.status(503).send({ message: "Some error occured" });
        }

        res.status(200).send({ message: "Success", users: users })
    }
}
