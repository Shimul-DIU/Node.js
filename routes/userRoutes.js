let express=require('express')
let router=express.Router()
let path=require('path')
const { createUser,getUsers } = require('../controller/userController.js')


router.get('/',getUsers)
router.post('/',createUser)


module.exports=router