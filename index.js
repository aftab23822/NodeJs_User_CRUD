const express = require("express");
const Logger = require('./middlewares/loghandler');
const { ConnectMongoDB } = require("./connection")
const userRouteHandler = require('./routes/routeHandler');

const port = 8000;

const app = express()
ConnectMongoDB()

//Middleware
app.use(express.urlencoded({extended : false}))
app.use(Logger)


app.use("/api/user",userRouteHandler);







app.listen(port,()=>{
    console.log(`Server Started at Port: ${port}!`)
})