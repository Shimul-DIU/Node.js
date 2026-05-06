let mongoose=require('mongoose')
let productSchema=mongoose.Schema({
    name:String,
    price:Number,
    description:String,
    category:String,
    image:String
})

module.exports=mongoose.model('products',productSchema)