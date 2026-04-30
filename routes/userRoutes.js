let express=require('express')
let router=express.Router()
let path=require('path')
const { createUser,getUsers } = require('../controller/userController.js')
const { createProfile } = require('../controller/profileControlle.js')
const upload = require('../middlewares/multer.middlewares.js')


router.get('/register',getUsers)
router.post('/register',createUser)
router.get('/profile',(req,res)=>{
    res.sendFile(path.join(__dirname,'../views/profile.html'))
})
router.post('/profile',

   upload.fields([
    {name:'image',maxCount:1},
    {name:'video',maxCount:1}
   ]),createProfile)


module.exports=router