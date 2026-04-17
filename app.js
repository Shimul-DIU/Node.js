let express=require('express')
let mongoose=require('mongoose')
let path=require('path')
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
app.use('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'./views/home.html'))
})
app.use((req,res,next)=>{
    res.status(404).send({
        message:'404 not found'
    })
})
app.use((err,req,res,next)=>{
    res.status(500).send({
        message:'server is busy'
    })
})
module.exports = { app, connectMongodb }