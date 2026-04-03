let http=require('http')
let fs=require('fs')
let hostName='127.0.0.1'
let port=3000
let server=http.createServer((req,res)=>{
    if (req.url==='/'){
        res.writeHead(200,{'Content-Type':'text/html'})
        fs.readFile('./views/home.html',(err,data)=>{
            if (err){
                console.log('error')
            }
            else{
                res.write(data)
                res.end()
            }
        })
    }
    else if (req.url==='/about'){
        res.writeHead(200,{'content-type':'text/html'})
        fs.readFile('./views/about.html',(err,data)=>{
            if (err){
                console.log('error')
            }
            else{
                res.write(data)
                res.end()
            }
        })
    }
    else if (req.url==='/login'){
        res.writeHead(200,{'content-type':'text/html'})
        fs.readFile('./views/login.html',(err,data)=>{
            if (err){
                console.log('error')
            }
            else{
                res.write(data)
                res.end()
            }
        })
    }
    else if (req.url==='/service'){
        res.writeHead(200,{'content-type':'text/html'})
       
        fs.readFile('./views/service.html',(err,data)=>{
            if (err){
                console.log('error')
            }
            else{
                res.write(data)
                res.end()
            }
        })
    }
    else{
        res.writeHead(404,{'content-type':'text/html'})
        fs.readFile('./views/error.html',(err,data)=>{
            if (err){
                console.log('error')
            }
            else{
                res.write(data)
                res.end()
            }
        })
        
    }
})
server.listen(port,hostName,()=>{
    console.log(`server is runnig sucessfully at http:/${hostName}:${port}`)
})