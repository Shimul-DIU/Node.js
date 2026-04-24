let { v4: uuidv4 } = require('uuid')
let users=require('../models/userModels')
let path=require('path')
let getUsers=(req,res)=>{
    res.sendFile(path.join(__dirname,'../views/users.html'))
}

let createUser=async (req,res)=>{
    try {
    let {name,age,birthday,location,phone}=req.body;
       let newUser=new users({
        id:uuidv4(),
        name:name,
        age:Number(age),
        birthday:birthday,
        location:location,
        phone:Number(phone)
    });
    await newUser.save();
    res.status(201).json(newUser);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

module.exports={getUsers,createUser}