let app=require("./app")
let port=3000

app.listen(port,()=>{
    console.log(`your server is running sucessufull at http://localhost:${port}`)
})