require('dotenv').config()
let dev={
    app:{
        port:process.env.PORT,
    },
    db:{
        url:process.env.DB_URL || "mongodb://localhost:27017/shimul_store_db"
    }
}
module.exports=dev