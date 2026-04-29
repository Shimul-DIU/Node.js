let {app,connectMongodb}=require('./app')
let config=require('./config/config')

require('dotenv').config()
let PORT=config.app.port || 3000

app.listen(PORT,async()=>{
    await connectMongodb();
    console.log(`your server is running sucessufull at http://localhost:${PORT}`)
})