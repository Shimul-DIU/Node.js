let mongoose=require('mongoose')
let userSchema=mongoose.Schema({

    firstName:{
        type: String,
        required: true
    },
    lastName:{
        type: String,
        required: true
    },
    fatherName:{
        type: String,
        required: true
    },
    motherName:{
        type: String,
        required: true
    },
    age:{
        type:Number,
        required:true
    },
    dob:{
        type:Date,
        required:true
    },
    divition:{
        type:String
    },
    gender:{
        type:String 
    }
})

module.exports=mongoose.model('users',userSchema)