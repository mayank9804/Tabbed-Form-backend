const express = require('express');
const mongoose = require('mongoose')
require('dotenv').config();
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(bodyParser.json({limit: '50mb', type: 'application/json'}));
app.use(bodyParser());

const registerRoutes = require('./routes/register');
const generalRoutes = require('./routes/general');
app.use('/register',registerRoutes);
app.use('/general',generalRoutes);


app.listen(process.env.PORT||3000,()=>{
    console.log("Server Started");
})



mongoose.connect(`mongodb://${process.env.MLABUSERNAME}:${process.env.MLABPASSWORD}@ds259111.mlab.com:59111/deevesoft`,{ useNewUrlParser: true })

