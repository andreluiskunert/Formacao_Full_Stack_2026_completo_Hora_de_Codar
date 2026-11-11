console.log("------------Programação Orientação a Objetos--------------------")
 
//  Terça-feira_D'noite, 10/11/2026
console.log("9ª Classes ES6")
class CachorroClasse {
   constructor(nome, raca){
    this.nome = nome;
    this.raca = raca;
   }
}
const jeff = new CachorroClasse("Jeff", "Lavador")
console.log(jeff)
console.log(Object.getPrototypeOf(jeff))
console.log("---//----//---//---")
 console.log("10ª Mais sobre Classes")
 class Caminhao{
  constructor(eixos, cor){
    this.eixos = eixos
    this.cor = cor
  }
  descreverCaminhao(){
    console.log(`Este caminhão tem ${this.eixos} eixos e da cor ${this,this.cor} `)
  }
 }
 const scania = new Caminhao(6, "vermelha")
 console.log(scania)
 scania.descreverCaminhao()
 Caminhao.motor =4
 const c2 = new Caminhao(4, "Preta")
 console.log(c2)
 console.log(c2.motor)
 Caminhao.prototype.motor = 4.0
  const c3 = new Caminhao(6, "Azul")
 console.log(c3)
 console.log(c3.motor)
 console.log("That’s all for today, folks.")
console.log("===>Próxima páginas ======>")