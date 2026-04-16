let express=require('express')
let mongoose=require('mongoose')
const userRouter = require('./routes/userRoutes.js')
let app=express()

let connectMongodb=async()=>{
    try {
        await mongoose.connect('mongodb://localhost:27017/products')
        console.log('connect sucessfull')
    } catch (error) {
        console.log('connect not sucessfull')
    }
}
app.use('/',userRouter)

module.exports = { app, connectMongodb }