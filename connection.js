const mongoose = require("mongoose")


async function ConnectMongoDB() {
    try
    {
        await mongoose.connect('mongodb+srv://aftabbaloch69:{password}@mernauth.pw2xiot.mongodb.net/test?retryWrites=true&w=majority')
        console.log("MongoDB Connected")
    }
    catch(error)
    {
        console.log("MongoDB Connection Error", error)
    }
    
    // .then(()=> console.log("MongoDB Connected"))
    // .catch( (err)=>console.log("MongoDB Connection Error", err) )
}

module.exports = {ConnectMongoDB};

