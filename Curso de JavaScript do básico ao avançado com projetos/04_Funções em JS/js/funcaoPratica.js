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
console.log("The End")