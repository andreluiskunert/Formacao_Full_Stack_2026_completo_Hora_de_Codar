console.log("Curso de JavaScript do básico ao avançado com projetos ")
console.log("Arrays & Objetos_02ª") 
// Quinta-feira_D'noite, 22/10/2026
console.log("5ª Objetos")
console.log(" 06ª Criando E Deletando Propriedades")
const car = {
    engine: 2.0,
    brand: "FIAT",
    model:"UNO",
    km: 20000,

}
console.log(car)
car.doors = 4;
console.log(car)
delete car.km
console.log(car)
// Sexta-feira_D'note, 23/10/2026
console.log("07ªLoop em Array")
const users = ["Matheus", "João","Pedro","Miguel"]
for(let i = 0; i < users.length; i++){
    console.log(`Listando o usuário: ${users[1]}`)
}
console.log("11_Push e Pop")
const array = ["a", "b", "c"]
array.push("d")
console.log(array)
console.log(array.length)
array.pop()
console.log(array)
const itemRemovido = array.pop()
console.log(itemRemovido)
console.log(array)
array.push("z", "x","y")
console.log(array)
console.log("The End")