var http=require('http')
var fs=require('fs')
http.createServer(function(req,res){
    if(req.url==='/'){
    fs.readFile('index.html',function(err,data){
        res.writeHead(200,{'content-type':'text/html'})
        res.write(data)
        res.end()
    })}else if(req.url==='/signup'){
        fs.readFile('signup.html',function(err,data){
            res.writeHead(200,{'content-type':'text/html'})
            res.write(data)
            res.end()
        })
       
    }
    else{
        res.writeHead(404,{'content-type':'text/html'})
        res.write('error')
        res.end()
    }

}).listen(8000,() =>console.log("serverstarted")

)

