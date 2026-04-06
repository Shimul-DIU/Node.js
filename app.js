let express=require('express')
let app=express()
let path=require('path')
let userRouter=require('./routes/user.routes')
const bodyParser=require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use("/user",userRouter)

app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,'./views/home.html'))
})
app.get("/contact",(req,res)=>{
    res.status(202).json(
        {
            name:"shimul",
            roll:7
        }
        

    )
})
app.post("/",(req,res)=>{
    res.send('create sucessfull')
})
app.delete("/",(req,res)=>{
    res.send('delete sucessfull')
})
app.use((req,res)=>{
    res.status(404).send('404 page not found!')
})
module.exports=app