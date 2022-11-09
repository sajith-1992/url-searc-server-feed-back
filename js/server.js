var http=require('http')
var fs=require('fs')
var url=require('url')
http.createServer(function(req,res){
  var q=url.parse(req.url)
       


    if(q.pathname==='/'){
    fs.readFile('index.html',function(err,data){
        res.writeHead(200,{'content-type':'text/html'})
        res.write(data)
        res.end()
    })}else if(q.pathname==='/log'){
        fs.readFile('sign.html',function(err,data){
            res.writeHead(200,{'content-type':'text/html'})
            res.write(data)
            res.end()
        })}
        else if(q.pathname==='/signup'){
            res.write("hello")
            res.end()
            
        }
       
    
    else{
        res.writeHead(404,{'content-type':'text/html'})
        res.write('error')
        res.end()
    }

}).listen(8000,() =>console.log("serverstarted")

)

