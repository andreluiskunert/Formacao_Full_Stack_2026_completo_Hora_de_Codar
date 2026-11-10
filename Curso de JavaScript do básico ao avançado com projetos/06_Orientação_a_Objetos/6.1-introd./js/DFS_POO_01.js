console.log("------------Programação Orientação a Objetos--------------------")
 console.log("01ª Métodos:")
 const animal = {
  name: "bob",
  latir: function(){
    console.log("Au AU")
  }
 }
  console.log(animal.name)
  animal.latir()
console.log("---//---//---//----//---//------//---//---//---//----//---//------//---")
console.log("2ª Aprofundo em Métodos")
const pessoa = {
name: "André Luis",
// age: 44,
// profissao: "Desenvolvedor Full Stack",

getname: function(){
  return this.name;
 }, 
 setName: function(newName){
    this.name = newName;
 }
};
 console.log(pessoa.name)
 console.log(pessoa.getname())
 pessoa.setName("Andre Luis Kunert")
 console.log(pessoa.getname())
 console.log("---//---//---//----//---//------//---//---//---//----//---//------//---")
console.log("03ª Prototype")
const text = "GoogEvening";
console.log(Object.getPrototypeOf(text))
const bool = true;
console.log(Object.getPrototypeOf(bool))
const arr = [];
console.log(arr.length)
console.log(Object.getPrototypeOf(arr))

console.log("That’s all for today, folks.")
console.log("===>Próxima páginas ======>")