let app=require("./app")

require('dotenv').config() 
let PORT= process.env.PORT || 3000

app.listen(PORT,()=>{
    console.log(`your server is running sucessufull at http://localhost:${PORT}`)
})