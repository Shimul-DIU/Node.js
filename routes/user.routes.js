let express=require('express')
let router=express.Router()
let path=require('path')



// router.get("/id/:id/name/:name",(req,res)=>{

    //  -------route request---------
    // res.sendFile(path.join(__dirname,'../views/user.html'))
    // let id=req.params.id
    // let name=req.params.name
    // res.end(`id is ${id} name is ${name}`)

    // -------



// })
router.get("/",(req,res)=>{
    let id=req.header("id")
    let name=req.header("name")
    res.end(`name is ${name} id is ${id}`)
})
router.get("/login",(req,res)=>{
    let {id,age,location}=req.query
    // res.sendFile(path.join(__dirname,'../views/login.html'))
    res.send(`login sucessfull user id ${id} he is ${age} years old and he live in ${location}`)
})
router.get("/register",(req,res)=>{
    res.sendFile(path.join(__dirname,'../views/register.html'))
    // res.redirect("/user/login")
   
})
router.post("/info",(req,res)=>{
        const { firstName, lastName, fatherName, motherName, dof, divition, gender } = req.body
        res.send(`fastname is ${firstName} \n lastname is ${lastName} \n date of birth ${dof} \n father name is ${fatherName} \n mother name is ${motherName} \n gender is ${gender} \n division is ${divition} `)
})



module.exports=router