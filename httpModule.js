let http =require('http')
let host='127.0.0.1'
let port=3000
let server=http.createServer((req,res)=>{
    res.writeHead(200,{"content-type":"text/html"})
    res.write('welcome to my first server')
    res.write('<h1>hello shimul</h1>')
    res.end()
})
server.listen(port,host,()=>{
console.log(`server is running at http://${host}:${port}`)
})