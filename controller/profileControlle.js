let Profile=require('../models/profileModel.js')
let {v4:uuidv4}=require('uuid')
let createProfile=async(req,res)=>{
try {
  console.log(req.files)
let {name,image,video}=req.body;
let newProfile=new Profile({
  id:uuidv4(),
  name,
  image:req.files?.image?.[0]?.path,
  video:req.files?.video?.[0]?.path
})
 await newProfile.save();
res.status(201).json(newProfile);
} catch (error) {
 res.status(500).send(error.message);
 console.log(error.message)
}
}

module.exports={createProfile}