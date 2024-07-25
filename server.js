const express = require('express')
const logger = require('morgan')

const mongoose = require('mongoose')
// const productRouter = require('./routes/product/model/productRouter')
const userRouter = require('./routes/users/userRouter')

mongoose
    .connect("mongodb://127.0.0.1:27017/mongodb-demo")
    .then(()=>{
        console.log('MONGO DB CONNECTED.')
    }).catch((e)=>{
        console.log(e)
    })

const app = express()



app.use(logger('dev'))
app.use(express.json())
app.use('/api/users', userRouter)



app.listen(3000,()=>{
    console.log('Server started on port 3000.')
})

