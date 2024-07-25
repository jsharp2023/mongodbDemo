const User = require('../model/User')//pulls in schema for DB use

async function getAllUsers(){
    try {
        const foundUsers = await User.find({})
        return foundUsers
    } catch (error) {
        return error
    }
}

async function createUser(body){
    try {
        const newUser = new User({...body})//like copy 
        return await newUser.save()
    } catch (error) {
        return error
    }
}

async function updateUserByID(id, body){
    try {
        const updatedUser = await User.findByAndUpdate(id,{...body},{new:true})
        return updatedUser
    } catch (error) {
        return error
    }
}

async function deleteUserByID(id){
    try {
        const deleteUser = await User.findByIdAndDelete(id)
        return 
    } catch (error) {
        return error
    }
}

module.exports = {
    getAllUsers,
    createUser,
    updateUserByID,
    deleteUserByID
}