const express = require('express')
const router = express.Router()

const {getAllUsers, createUser, findByIdAndUpdate } = require('../controller/userController-v2')
const { findByIdAndDelete } = require('./User')

router.get('/get-all-users', async(req, res)=>{
    try {
        const foundUsers = await getAllUsers()
        req.json({message: "Found all users", payload: foundUsers})
    } catch (error) {
        res.status(500).json({message: 'Error', error: error})
    }
})

router.post('/create-user', async(req, res)=>{
    try {
        const newUser = await createUser(req.body)
        req.json({message:"User Created.", payload: newUser})
    } catch (error) {
        res.status(500).json({message: 'Error', error: error})
    }
})

router.put('/find-and-update/:id', async(req,res)=>{
    try {
        const  updatedUser = await findByIdAndUpdate(req.params.id, req.body)
        req.json({message:"User Updated.", payload: updatedUser})
    } catch (error) {
        res.status(500).json({message: 'Error', error: error})
    }
})

router.delete('/delete-user/:id',  async(req, res)=>{
    try {
        await findByIdAndDelete(req.params.id)
        req.json({message:"User Deleted."})
    } catch (error) {
        res.status(500).json({message: 'Error', error: error}) 
    }
})
module.exports = router