let express=require('express')

let {getProducts, createProducts}=require('../controller/productController.js')
let router=express.Router()
router.get('/',getProducts)
router.post('/',createProducts)

module.exports=router