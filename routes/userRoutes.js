let express=require('express')
let router=express.Router()
let path=require('path')
const getUsers = require('../controller/userController.js')


router.get('/',getUsers)


module.exports=router