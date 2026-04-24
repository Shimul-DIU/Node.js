let mongoose=require('mongoose')
let userSchema=mongoose.Schema({
    id:{
        type:String,
        unique:true
    },
    name:{
        type: String,
        required: true
    },
    age:{
        type:Number,
        required:true
    },
    birthday:{
        type:Date,
        required:true
    },
    location:{
        type:String
    },
    phone:{
        type:Number,
        required:true,
    }
})

module.exports=mongoose.model('users',userSchema)