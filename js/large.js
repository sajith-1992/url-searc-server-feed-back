var r=require('readline-sync')
var num1=r.question('enter a Numb1')
console.log(num1)
var num2=r.question('enter the  numb2')
console.log(num2)
if(num1<num2){
    console.log(' greatest'+num2)
}else if(num1==num2)    
{console.log(num1==num2)}


 else{
    console.log ('smallest'+num1)
}