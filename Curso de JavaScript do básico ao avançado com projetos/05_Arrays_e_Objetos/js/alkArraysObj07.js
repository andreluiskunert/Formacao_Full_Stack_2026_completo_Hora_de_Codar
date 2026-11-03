console.log("Curso de JavaScript do básico ao avançado com projetos ")
console.log("Arrays & Objetos_02ª") 
// Quinta-feira_D'noite,29/10/2026
console.log("16ª Destructuring com arrays")
const myList = ["Avião", "Submarino", "Carro", "Bicicleta"]
const [veiculoA, veiculoB, veiculoC, veiculoD] = myList
console.log(veiculoA, veiculoB, veiculoC, veiculoD)
console.log("---//-----///---////----///-----///---------///-----")
console.log("17ª JSON")
const myJson  = '{"name":"Andre Luis", "age":44, "skills":["Desenvolvedor Full Stack", "Tecnico em Informatica","Analista de TI e Sistemas"]}'
console.log(myJson)
console.log(typeof myJson)
console.log("---//-----///---////----///-----///---------///-----")
console.log("18ª Conversão de JSON pra Objetos:")
const myObject = JSON.parse(myJson)
console.log(myObject)
console.log(myObject.name)
console.log(typeof myObject)
console.log("JSON invalido")
const badJson = '{"name": Andre Luis, "age": 44}'
// const mysBadObject = JSON.parse(badJson)
// Uncaught SyntaxError: JSON.parse: unexpected character at line 1 column 10 of the JSON data
//     <anonymous> http://127.0.0.1:5500/Formacao_Full_Stack_2026_completo_Hora_de_Codar/Curso de JavaScript do básico ao avançado com projetos/05_Arrays_e_Objetos/js/alkArraysObj07.js:21
//  alkArraysObj07.js:21:27
myObject.isOpenToWork = true;
console.log(myObject)
const mysNewJson = JSON.stringify(myObject)
console.log(mysNewJson)

console.log("The End")
console.log("===> Próxima pagina em JS===> ")