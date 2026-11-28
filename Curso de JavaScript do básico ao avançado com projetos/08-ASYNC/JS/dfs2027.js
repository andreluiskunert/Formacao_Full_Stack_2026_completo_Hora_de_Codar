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
console.log("--//-----///----")
// Quinta-feira_D'noite,26/11/2026
console.log("4ªfalha na Promise")
Promise.resolve(4 * "alk")
.then((n) =>{
  if (Number.isNaN(n)) {
     throw new Error("Valores invalidos ")
  }
})
.catch((err) => console.log(`Um erro ocorreu:${err}`))
console.log("--//-----///----")
// Quinta-feira_D'noite,26/11/2026
console.log("5ªRejeição de  Promise")
function checkNumber(n){
  return new Promise((resolve, reject) =>{
    if (n > 10) {
      resolve(`O número é maior que 10`);
    } else{
      reject(new Error("Numero muito baixo"))
    }
  });
}
const a = checkNumber(20)
const b = checkNumber(10)
console.log(a, b)
a.then((v) => console.log(`O resultado é ${v}`)).catch((err) => console.log(`Um erro ocorreu ${err}`))
console.log("--//-----///----")
// Quinta-feira_D'noite,26/11/2026
console.log("6ª Resolvendo vários  Promise")
const p1 = new Promise((resolve, reject)=>{
  setTimeout(function(){
     resolve(10)
  }, 1000)
})
const p2 = Promise.resolve(10+10)
const p3 = new Promise((resolve, reject)=>{
  if (30 > 10) {
    resolve(30);
  } else {
    reject("error")
  }
});
Promise.all([p1, p2, p3]).then((values) => console.log(values))
console.log("--//-----///----")
console.log("That’s all for today, folks.")