console.log("------------Programação Orientação a Objetos--------------------")
 console.log("04ª Mas sobre Prototype:")
//  Quarta-feira_D'noite, 04/11/2026
 const myObject = {
  a: "b"
 }
  console.log(Object.getPrototypeOf(myObject))
  console.log(Object.getPrototypeOf(myObject) === Object.prototype)
  const mySecondObject = Object.create(myObject)
  console.log(mySecondObject)
    
  console.log(mySecondObject.a)
  console.log(Object.getPrototypeOf(mySecondObject) === myObject)
  console.log("---//---//----//----//----")
 console.log("05ª Classes Basicas")
//  Quinta-feira_D'noite, 05/11/2026
const cachorro = {
  raca: null,
  patas: 4
}
const pastorAlemao = Object.create(cachorro)
pastorAlemao.raca = "pastor Alemão"
console.log(pastorAlemao)
console.log(pastorAlemao.patas)
const kanicorso = Object.create(cachorro)
kanicorso.raca = "Kanicorso"
console.log(kanicorso)
console.log("That’s all for today, folks.")