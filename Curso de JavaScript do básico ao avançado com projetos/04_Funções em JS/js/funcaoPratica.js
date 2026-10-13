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
console.log("The End")