const User = require("../model/User")

const HandleGetAllUsers = async (req,res) =>
{
    return res.json(await User.find({}))
}

const HandleAddUser = async (req,res)=>{
    const body = req.body;
    if(!body || !body.email || !body.first_name || !body.gender || !body.last_name || !body.job_title){
        return res.status(400).json({error: "Incomplete Fields"})
    }

    const result = await User.create({
        email : body.email,
        firstName : body.first_name,
        lastName : body.last_name,
        gender : body.gender,
        jobTitle : body.job_title
    })
    
    res.status(201).json({ id: result.id, status:"Successful"})
}

const HandleGetUserById = async (req,res)=>{
    if(!req.params.id) return res.status(400).json({ error : "No Id was provided!"});
    const user = await User.findById(req.params.id);
    if(!user) return res.status(404).json({ error : "No user found!"});
    return res.json(user);
};

const HandleUpdateUserById = async (req,res) =>{
    if(!req.params.id) return res.status(400).json({ error : "No Id was provided!"});
    if(!req.body.email || !req.body.first_name || !req.body.job_title){
        return res.status(400).json({error: "Incomplete Fields"})
    }
    const body = req.body;
    let index = await User.findOneAndUpdate({_id:req.params.id},{$set:{
        email : body.email,
        firstName : body.first_name,
        lastName : body.last_name,
        gender : body.gender,
        jobTitle : body.job_title
    }}
    ,{new:true})

    return res.status(200).json({first_name: index.firstName, status:"Success"});
}


const HandleDeleteUserById = async (req,res) =>{
    if(!req.params.id) return res.status(400).json({ error : "No Id was provided!"});
    await User.findByIdAndDelete(req.params.id);
    return res.status(200).json({status:"Success"})
}



module.exports = {
    HandleGetAllUsers,
    HandleAddUser,
    HandleGetUserById,
    HandleUpdateUserById,
    HandleDeleteUserById
}