const User = require('../model/User')//pulls in schema for DB use
const bcrypt = require('bcryptjs')

async function getAllUsers(req, res){
    try {
        const foundUsers = await User.find({})
        res.json({message: "Users Found.", payload:foundUsers})
    } catch (error) {
        res.status(500).json({message: "Error.", error: error})
    }
}

async function createUser(req, res){
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10)
        const newUser = new User({
            ...req.body, password: hashedPassword
        })
        const savedUser = await newUser.save()
        res.json({message: "User Created.", payload:savedUser})
    } catch (error) {
        res.status(500).json({message: "Error.", error: error})
    }
}

async function updateUserByID(req, res){
    try {
        const updatedUser = await User.fidUserByID(req.params.id, {...req.body}, {new:true})
        res.json({message: "User Updated.", payload: updatedUser})
    } catch (e) {
        res.json({message: "error", e})
    }
}

async function deleteUserByID(req, res){
    try {
        const deleteUser = await User.findByIdAndDelete(req.params.id)
        res.json({message: "User Deleted.", payload: deleteUser})
    } catch (e) {
        res.json({message: "Error.", error: e})
    }
}



module.exports = {
    getAllUsers,
    createUser,
    updateUserByID,
    deleteUserByID
}