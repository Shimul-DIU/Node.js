let mongoose=require('mongoose')
let profileSchema=mongoose.Schema({
  name:{
    type:String,
    required:[true,'name is required']
  },
  image:{
    type:String,
    required:[true,'image is required']
  },
  video:{
    type:String,
    required:[true,'video is required']
  }
})

module.exports=mongoose.model('profiles',profileSchema)