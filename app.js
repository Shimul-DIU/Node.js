let express=require('express')
let path=require('path')

const userRouter = require('./routes/userRoutes.js')
const connectMongodb = require('./config/db.js')
let app=express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
// Mount user routes
app.use('/users', userRouter)

// Home page route
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'./views/home.html'))
})


// 404 handler
app.use((req,res,next)=>{
    res.status(404).send({
        message:'404 not found'
    })
})

// Error handling middleware
app.use((err,req,res,next)=>{
    res.status(500).send({
        message:'server is busy'
    })
})

module.exports = { app, connectMongodb }