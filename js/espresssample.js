const express=require('express')
const path=require('path')
const app=express()
app.use(function(req,res,next){
    console.log ('start')
    next()
})

app.get('/',function(req,res,next){
    res.sendFile(path.join(__dirname,'sign.html'))
console.log('middle')
})

app.use(function(req,res,next){
    console.log('end' )
})
app.post('/sign',function(req,res){
   
    req.send('account created')
})


app.listen(3000,function(){
    console.log("hai")
    console.log(__dirname)
    console.log(__filename)
})
