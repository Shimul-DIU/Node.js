let path=require('path')
let getUsers=(req,res)=>{
    res.sendFile(path.join(__dirname,'../views/login.html'))
}

module.exports=getUsers