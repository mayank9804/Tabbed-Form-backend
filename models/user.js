const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let userSchema = new Schema({
    name : {type:String,required:true},
    description:{type:String},
    dp:{data:Buffer,contentType:String},
    state:{type:String,required:true},
    age:{type:Number,required:true},
    ethnicity:{type:String,required:true},
    race:{type:String,required:true},
    sex:{type:String,required:true},
    height:{type:String,required:true},
    weight:{type:String,required:true}
})

let User = mongoose.model('User',userSchema);

module.exports = {
    User:User
}