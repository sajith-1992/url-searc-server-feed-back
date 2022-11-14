const express=require('express')
const path=require('path')
const app=express()

app.get('/',function(req,res){
    res.sendFile(path.join(__dirname,'sign.html'))
})
app.post('/sign')


app.listen(3000,function(){
    console.log("hai")
    console.log(__dirname)
    console.log(__filename)
})
