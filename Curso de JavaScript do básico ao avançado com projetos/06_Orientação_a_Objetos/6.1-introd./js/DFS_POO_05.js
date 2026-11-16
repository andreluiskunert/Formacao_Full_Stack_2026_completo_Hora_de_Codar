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
console.log("----//-----//----//----//----//-----//----//----")
console.log("13ª getter e setter")
// Domingo_D'noite, 15/11/2026
class Post{
  constructor(titulo, decricao, tags){
    this.titulo = titulo;
    this.decricao = decricao;
    this.tags = tags;
  }
  get exibirTitulo(){
    return`Você está lendo:${this.titulo}`
  }
  set adicionarTags(tags){
    const tagsArray = tags.split(", ")
    this.tags = tagsArray
  }
}
const mysPost = new Post("Algum post","É um post sobre Programação")
console.log(mysPost)
console.log(mysPost.exibirTitulo)
mysPost.adicionarTags = "Programação, JavaScript, Node.js";
console.log(mysPost)
console.log("----//-----//----//----//----//-----//----//----")
console.log("14ª herança")
class Manifero{
  constructor(patas){
    this.patas = patas
  }
}
class Lobo extends Manifero{
  constructor(patas, nome){
    super(patas, patas)
    this.nome = nome
  }
}
const shark = new Lobo(4, "Shark")
console.log(shark)
const nightwolf = new Lobo(4, "Nightwolf")
console.log(nightwolf)
console.log(nightwolf.patas)
console.log(shark.patas)
console.log("----//-----//----//----//----//-----//----//----")
console.log("15ª Instanceof")
console.log(shark instanceof Lobo)
console.log(Lobo instanceof Manifero)
console.log(new Lobo(4, "teste") instanceof Manifero)
console.log(new Post("a", "b")instanceof Lobo)
 console.log("That’s all for today, folks.")
console.log("===>Próxima páginas ======>")