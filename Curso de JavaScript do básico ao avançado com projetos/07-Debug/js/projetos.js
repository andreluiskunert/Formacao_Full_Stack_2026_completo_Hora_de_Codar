console.log("1ª strict")
"use strict";
// opa = "teste";
const opa = "teste";
console.log(opa)
// const undefined = 10
// delete [].length
console.log("--//---///----///----///------")
console.log("Console.log")
let a = 1;
let b = 2;
if(a == 1){
    a = b + 2;

}
for(let i = 0; i < b;i++){
    a = a + 2 
    console.log(a)
}
console.log("--//---///----///----///------")
// Quinta-feira_D'noite
console.log("2ªdebugger")
let c = 3;
let d = 5;
if(c == 3){
    c = d + 7
}
// debugger;
for(let i = 0; i < d; i++ ){
    c = c + 2 
}
console.log("----///-----////------")
console.log("4ª Tratamento de Dados ")
 function checkNumber(n){
   const  result = Number(n)
   if(Number.isNaN(result)){
     console.log("Valor Incorreto");
     return;

   }
   console.log("Valor Correto..");
   return result;
 }
 checkNumber(5);
 checkNumber("11");
 checkNumber({});
 checkNumber("teste");
console.log("----///-----////------")
console.log("5ª exceptions ")
let x = 10
if(x != 11) {
    // throw new Error("O valor de X não pode ser diferente de 11!")
}
console.log("----///-----////------")
console.log("5ª Try Catch ")
// Sabádo_D'noite, 21/11/2026
try{
  const soma = x + y
}catch{
    console.log(`Erro no programa: ${Error}`)
}
console.log("----///-----////------")
console.log("6ª Finally ")
 try{
    const value = checkNumber("fgd")
    if(!value){
        throw new Error("Valores inválidos")
    }
 } catch(error){
    console.log(`Opa, aconteceu um problema:${error}`)
 } finally{
    console.log("O código foi executado...")
 }
 console.log("----///-----////------")
console.log("7ª Assertion ")
function checkArray(arr){
    if (arr.length === 0) {
        throw new Error("O array precisa ter elementos");
    } else{
        console.log(`O array tem ${arr.length} elementos`)
    }
}
console.log("The End")