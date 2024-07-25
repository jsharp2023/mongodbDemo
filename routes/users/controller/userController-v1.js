// const User = require('../model/User')//pulls in schema for DB use

// module.exports = {
//     //getAllUsers
//     getAllUsers: function (callback){
//         User.find({})
//         .then(payload => {
//             callback(null, payload)
//         })
//         .catch(error=>{
//             callback(error, null)
//         })
//     },
//     //createUser
//     createUser: function (body, callback ){
//         const {
//             firstName,
//             lastName,
//             email,
//             password,
//             username
//         } = body
//         const newUser = new User({
//             firstName,
//             lastName,
//             email,
//             password,
//             username
//         })
//         newUser.save()//Promise
//         .then(payload=>{
//             callback(null, payload)
//         })
//         .catch(error=>{
//             callback(error, null)
//         })
//     },
//     //updateUserByID
//     updateUserByID : function (id, body, callback){
//         User.findByIdAndUpdate(id, body, {new: true})
//         .then(updatedPayload =>{
//             callback(null, updatedPayload)
//         })
//         .catch(error=>{
//             callback(error, null)
//         })
//     },
//     //deleteUserByID
//     deleteUserByID : function(id, callback){
//         User.findByIdAndDelete(id)
//         .then(deletedUser =>{
//             callback(null, deletedUser)
//         })
//         .catch(error =>{
//             callback(error,null)
//         })
//     }
// }