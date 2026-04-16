let {app,connectMongodb}=require('./app')

require('dotenv').config() 
let PORT= process.env.PORT || 3000

app.listen(PORT,async()=>{
    await connectMongodb();
    console.log(`your server is running sucessufull at http://localhost:${PORT}`)
})