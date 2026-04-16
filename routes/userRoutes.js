let express=require('express')
let router=express.Router()
let path=require('path')
const getUsers = require('../controller/userController.js')

router.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'../views/home.html'))
})
router.get('/user',getUsers)


module.exports=router