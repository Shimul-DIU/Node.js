const { create } = require('axios');
let products=require('../models/productModel.js')
let axios=require('axios')
let getProducts=async(req,res)=>{
  try {
     console.log("API call start...");
    let response=await axios.get('https://dummyjson.com/products')
    console.log('data -> ',response.data)

    res.json(response.data)
  } catch (error) {
    console.log(error)
    res.send(error)
  }
}
// let singleProduct=(req,res)=>{
//    let response=await axios.get('https://dummyjson.com/products/')
// }

let createProducts=async(req,res)=>{
    

module.exports={getProducts,createProducts}