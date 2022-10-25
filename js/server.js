var http=require('http')
var fs=require('fs')
const { type } = require('os')
http.createServer(function(req,res){
    fs.readFile('index.html',function(err,data){
        res.writeHead(200,{'content-type':'text/html'})
        res.write(data)
        res.end()
    })
}).listen(8000)
