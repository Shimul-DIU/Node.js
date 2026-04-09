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
app.get("/userId/:id/userName/:name",(req,res)=>{
    let {id,name}=req.params
    if(!/^[0-9]{4}$/.test(id)){
        res.send('not a valid user id')

    }
    if(!/^[a-zA-Z_]{3,20}$/.test(name)){
       res.send('not a valid user name')
    }
   
    res.send(`user id is ${id} name is ${name}`)
})

app.post("/",(req,res)=>{
    res.send('create sucessfull')
})
app.delete("/",(req,res)=>{
    res.send('delete sucessfull')
})

app.get("/calculator",(req,res)=>{
    res.sendFile(path.join(__dirname,'/views/calculator.html'))
})
app.use((req,res)=>{
    res.status(404).send('404 page not found!')
})
module.exports=app