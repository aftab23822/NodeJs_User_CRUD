const mongoose = require('mongoose');


const userSchema = mongoose.Schema({
    firstName:{
        type : String,
        required : true,
    },
    email:{
        type : String,
        required : true,
        unique : true,
    },
    lastName :{
        type: String,
    },
    gender:{
        type: String,
    },
    jobTitle:{
        type : String,
    }

},{timestamps : true})


const User = mongoose.model("user",userSchema)

module.exports = User;