console.log("Tipos de funções ")
console.log("1ª Criando Função:")
function minhaFuncao(){
    console.log("Testando....1ª")
}
minhaFuncao();

const minhaFuncaoEmVariavel = function(){
    console.log("Função em Variavel..2ª")
}
minhaFuncaoEmVariavel()
function funcaoComParametro(txt){
    console.log(`Imprimindo : ${txt}`)
}
funcaoComParametro("Imprimindo algum texto ...3ª")
funcaoComParametro("Imprimir mais...4ª")
console.log("----//-----////-------///----")
console.log("2ª Retorno das Funções{return}")
console.log("...explicar....")
const a = 10 
const b = 20
const c = 30
const d = 40
function soma(n1, n2){
    return n1 + n2
}
const resultado  = soma(a, b)
console.log(resultado)
console.log(soma(c, d))
console.log("Os valores de a, b, c, d são: ", a, b, c, d, ";")
console.log("----//-----////-------///----")
console.log("3ª Escopo da Funções")
let y = 15
function TestandoEscopo(){
    let y = 20
    console.log(`Y dentro da função é : ${y};`)
}
TestandoEscopo()
console.log(`Y fora da função é : ${y}`)
TestandoEscopo()
console.log("----//-----////-------///----")
// Quarta-feira_D'Noite,14/10/2026
console.log("4ªEscopo Alinhado")
let m = 20;
function escopoAlinhado(){
    let m = 20
    if(true){
        let m = 30
        if(true) {
            let m = 40
            console.log(m)
        }
        console.log(m)
    }
       console.log(m)
}
escopoAlinhado()
 console.log(m)
console.log("----//-----////-------///----")
console.log("5ª Arrow function")
const testArrow = () =>{
    console.log("Está é uma arrow function")
}
testArrow()
// 
const parOuImpar = (n) =>{
    if (n % 2 === 0) {
        console.log("par")
        return
    }
    console.log("Impar")

}
parOuImpar(5)
parOuImpar(10)

console.log("----//-----////-------///----")
console.log("6 Mais sobre arrow functions...")
const raizQuadrada = (x) =>{
    return x * x
}
console.log(raizQuadrada(4))
// 
const raizQuadrada2 = (y) => y * y
console.log("A raiz Quadrada de Y:", raizQuadrada2(4))
console.log("A raiz Quadrada de X:", raizQuadrada(8))
const helloword = () => console.log("Hello word")
helloword()
// 
console.log("----//-----////-------///----")
console.log("7 Parâmetro Opcionais em Funções...")
// Quinta-freira_D'noite, 15/10/2026
const multiplication = function (m, n){
  if (n === undefined) {
    return m * 2;
  } else{
   return m * n;
  }
};
console.log("Um numero só:" + multiplication(5))
console.log("Com dois numeros:" + multiplication(2, 4))
console.log("Outro Exmplo:")
const greeting = (name) =>{
    if(!name){
        console.log("Olá!")
        return
    }
    console.log(`Olá ${name}`)
}
greeting()
greeting("Andre Luis")

console.log("----//-----////-------///----")
// Sexta-feira_D'Noite,16/10/2026
console.log("8ª Valor default")
const customGreeting = (name, greet = "Olá") =>{
return `${greet}, ${name}`
}
console.log(customGreeting("André Luis"))
console.log(customGreeting("Josias ", "boa noite"))
console.log("Outro exemplo...")
const repeatText = (text, repeat = 2)=>{
    for(let i = 0; i < repeat; i++){
        console.log(text)
    }
}
repeatText("1,2,3 Testando")
repeatText("ai vai o 4ª", 5)
console.log("----//-----////-------///----")
// Domingo_D'noite, 18/10/2026
console.log("9ª Closure")
function someFunction(){
   let txt = "JS é Legal"
   function display(){
    console.log(txt)
   }
   display() 
}
someFunction()
console.log("----//-----////-------///----")
console.log("10ª Mais sobre Closure...")
const multiplicationClosure = (n) =>{
    return(m) =>{
        return n * m
    }
}
const c1 =  multiplicationClosure(5)
console.log(c1)
const c2 = multiplicationClosure(10)
console.log(c2)
console.log(c1(5))
console.log(c2(10))
console.log("----//-----////-------///----")
console.log("11ª Recusion...")
const untilTen = (n, m)=>{
 if (n < 10) {
     console.log("A função paro executar!!!")
 } else{
    const x  = n -m
    console.log(x)
    untilTen(x, m)
 }
}
untilTen(100, 7)
// infite recursion
// function run(){
//     console.log("Executando")
//     run() loop infinito
// }
// run()
function factorial(x){
    if (x === 0) {
        return 1
    } else {
        return x * factorial(x - 1)
    }
}
const num = 7
const result = factorial(num)
console.log(`O fatorial do numero ${num} é ${result}`)
console.log("---->//<----->////<------->///<---->---->//<----->////<------->///<---->")
console.log("The End")