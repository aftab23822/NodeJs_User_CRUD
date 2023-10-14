const fs = require("fs");


const Logger = (req,res,next)=>{
    fs.appendFile("./log.txt",`${Date.now()} ${req.ip} ${req.method} ${req.path}\n`,(error,data)=>{
        next();
    })
}

module.exports = Logger;

