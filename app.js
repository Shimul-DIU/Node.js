let express=require('express')
let app=express()
let path=require('path')
let userRouter=require('./routes/user.routes')

app.use("/user",userRouter)

app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,'./views/home.html'))
})
app.use((req,res)=>{
    res.status(404).send('404 page not found!')
})
module.exports=app