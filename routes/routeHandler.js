const express = require("express");
const router = express.Router()
const { HandleGetAllUsers, HandleAddUser, HandleUpdateUserById, HandleGetUserById, HandleDeleteUserById } = require("../controllers/userController")

//Routes

router.get('/users',async (req,res)=>{
    const allUsers = await User.find({})
    const html = `
    <ul>
    ${allUsers.map(user=> `<li> ${user.firstName}  ${user.email} </li>`).join("")}
    </ul>
    `;
    return res.send(html);
})

router.use('/',).get(HandleGetAllUsers)
.post('/',HandleAddUser)

router.route('/:id').get(HandleGetUserById)
.patch(HandleUpdateUserById)
.delete(HandleDeleteUserById)



module.exports = router;