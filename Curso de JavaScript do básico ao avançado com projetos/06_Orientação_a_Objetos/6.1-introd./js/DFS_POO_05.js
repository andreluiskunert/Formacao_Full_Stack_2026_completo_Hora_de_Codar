console.log("------------Programação Orientação a Objetos--------------------")
 
//  Terça-feira_D'noite, 10/11/2026
console.log("11ª Override")
class humano{
  constructor(nome, idade, profissao){
    this.nome = nome
    this.idade = idade
    this.profissao = profissao
  }
}
const AndreLuis = new humano("Andre Luis", 44 , "Desenvolvedor_Full_Stack");
console.log(AndreLuis)
humano.prototype.idade = "Não definida";
console.log(AndreLuis.idade)
console.log(humano.prototype.idade)
console.log("----//-----//----//----//----//-----//----//----")
console.log("12ª Symbols em Classes")
class Aviao {
  constructor(marca, turbinas){
    this.marca = marca
    this.turbinas = turbinas
  }
}
const asas = Symbol()
const pilotos = Symbol()

Aviao.prototype[asas] = 2
Aviao.prototype[pilotos] = 3

const boeing = new Aviao("Boeing", 10)
console.log(boeing)
console.log(boeing[asas])
console.log(boeing[pilotos])

 console.log("That’s all for today, folks.")
console.log("===>Próxima páginas ======>")