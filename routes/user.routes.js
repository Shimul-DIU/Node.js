let express=require('express')
let router=express.Router()
let path=require('path')

router.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,'../views/user.html'))

})
router.get("/login",(req,res)=>{
    res.sendFile(path.join(__dirname,'../views/login.html'))
})
router.get("/register",(req,res)=>{
    res.sendFile(path.join(__dirname,'../views/register.html'))
})


module.exports=router