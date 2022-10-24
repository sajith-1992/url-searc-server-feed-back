function person(name,age,place){
    this.name=name,
    this.age=age,
    this.place=place,
    this.display= function(){
        console.log("name: "+ this.name+
        " age: "+ this.age)  }}
        
        var saji= new person ("saji","20","tcr")
        var abi =new person ("abi","2","tpl")
        var hi =new person("saji","5","tll")
        console.log(saji)
        saji.dob="10/2030"
        console.log(saji)
        saji.display=function(){
            console.log("hello")

        }
console.log(person.hi)
