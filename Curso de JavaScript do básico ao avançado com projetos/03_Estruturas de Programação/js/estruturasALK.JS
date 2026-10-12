//  Domingo_D'noite,11/10/2026
// 
console.log("---- Estruturas--- ") 
console.log("1ª Estrutura While")
let p = 0;
while(p < 5){
    console.log(`Repetindo p = ${p}`)
    p = p + 1;

}
// console.log("Loop Infinito")
// let x = 10;
// while (x > 5) {
//     console.log(`Travei ${x}`)
// }
console.log("-----//-----//---")
console.log("2ª Do while")
let o = 10;
do{
 console.log(`Valor de O é ${o}`)
 o-- 
}while(o > 1);
console.log("-----//-----//---")
console.log("3ª FOR")
for (let t =  0; t < 10; t++) {
    console.log("Repetir algo")   
}
console.log("§continuando usando o FOR....")
let r = 10;
for(r; r > 0; r = r - 1){
    console.log(`Repetiu o R ${r}`)
}
console.log("-----//-----//---")
console.log("4ª Importancia da Identação do código")
for (let u = 0; u < 10; u++) {
   if (u * 2 > 10) {
     console.log(`Maior que 10 é ${u}`)
   }else {
    if (u / 2 === 0) {
        console.log("Deu 0")
    }
   }
    
}
console.log("-----//-----//---")
console.log("5ª Break")
for (let g =20; g > 10; g--) {
   console.log(`O valor de G é :${g}`);
   if(g === 12){
    console.log("O g é 12");
    break;
   }  
}
console.log("-----//-----//---")
console.log("6ª Continue")
for (let s = 0; s < 10; s = s + 1) {
    //  Operador resto = %
    if(s % 2 === 0){
        console.log("Numero Par");
        continue;
    }
    console.log(s)
}
console.log("-----//-----//---")
console.log("7ª Switch")
const job = "Programador"
switch (job) {
    case "Programador":
        console.log("Você é um programador")
     break
    case "Advogado":
        console.log("Você é um Advogado")
     break
    case "Engenheiro":
        console.log("Você é um Engenheiro")
     break
    default:
        console.log("Profisão não encontrada")
        
}
// switch errado
console.log(" switch errado")
const l = 100;
 switch (l) {
    case 200:
        console.log("L é 200");
    case 200:
        console.log("L é 200");
    case 100:
        console.log("L é 100");
    case 10:
        console.log("L é 10");
    default:
        console.log("L não foi encontrado")
 }
console.log("==///===///=====///=====")
console.log("The End")
