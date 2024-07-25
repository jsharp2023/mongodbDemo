const express = require('express')
const router = express.Router()

const {getAllUsers, createUser, updateUserByID, deleteUserByID} = require('./controller/userController')


router.get('/get-all-users', getAllUsers)

router.post('/create-user', createUser)

router.put('/find-and-update/:id', updateUserByID)

router.delete('/delete-user/:id', deleteUserByID)


module.exports = router;