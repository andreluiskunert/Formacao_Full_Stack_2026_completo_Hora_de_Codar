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
console.log("The End")