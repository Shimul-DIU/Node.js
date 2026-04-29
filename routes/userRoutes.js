let express=require('express')
let router=express.Router()
let path=require('path')
const { createUser,getUsers } = require('../controller/userController.js')
const upload = require('../middlewares/multer.middlewares.js')


router.get('/register',getUsers)
router.post('/register',createUser)
router.get('/profile',(req,res)=>{
    res.sendFile(path.join(__dirname,'../views/profile.html'))
})
router.post('/profile',upload.single('image'),(req,res)=>{
   res.send({
    message:'file uploaded successfully',

   })
})


module.exports=router