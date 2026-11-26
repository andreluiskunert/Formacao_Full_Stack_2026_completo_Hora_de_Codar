// Terça-feira_D'Noite ,24/11/2026
console.log("1ª_setTimeout")
console.log("ainda não executou....")
setTimeout(function(){
    console.log("Requsição assincrona")
}, 2000)
console.log("achou que caiu o servidor de novo....")
console.log("--//-----///----")
console.log("2ª_setInterval")
console.log("ainda não executou....")
// setInterval(function(){
//     console.log("Intervalo assincrona")
// }, 3000)
console.log("achou que caiu o servidor de novo....")
console.log("--//-----///----")
console.log("3ªPromise")
const promessa = Promise.resolve(5 + 5)
console.log("Algum código")
console.log("Outro código")
promessa
  .then((value) => {
    console.log(`A soma é ${value}`);
    return value;
  })
  .then((value) => value - 1)
  .then((value) => console.log(`Agora é: ${value}`));

console.log("That’s all for today, folks.")