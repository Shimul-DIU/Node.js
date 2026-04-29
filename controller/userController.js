let { v4: uuidv4 } = require('uuid')
let users=require('../models/userModels')
let path=require('path')
let getUsers=(req,res)=>{
    res.sendFile(path.join(__dirname,'../views/register.html'))
}

let createUser=async (req,res)=>{
    try {
    let {firstName,lastName,fatherName,motherName,age,dob,divition,gender,}=req.body;
       let newUser=new users({
        id:uuidv4(),
        firstName,
        lastName,fatherName,motherName,age,dob,divition,gender
    });
    await newUser.save();
    res.status(201).json(newUser);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

module.exports={getUsers,createUser}