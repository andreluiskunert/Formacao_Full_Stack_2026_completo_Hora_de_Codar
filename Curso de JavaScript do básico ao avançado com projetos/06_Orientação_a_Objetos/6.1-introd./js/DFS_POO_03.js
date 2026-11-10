console.log("------------Programação Orientação a Objetos--------------------")
 console.log("06ª Função com classe_Função construtora:")
//  Segunda-feira_D'noite, 09/11/2026
 function criarCachorro(nome, raca){
   const cachorro = Object.create({})
   cachorro.nome = nome
   cachorro.raca = raca
   return cachorro;
 }
 const bob = criarCachorro("Bob", "Vira-lata")
 const poucosAmigos = criarCachorro("PoucosAmigos", "KaneCorso")
 console.log(bob)
 console.log(poucosAmigos)
 console.log(Object.getPrototypeOf(poucosAmigos))
 console.log("---//----//---//---")
 console.log("7ª Funções como classes")
 function Cachorro(nome, raca){
  this.nome = nome
  this.raca = raca
 }
 const husky = new Cachorro("Ozzy", "Husky")
 console.log(husky)
console.log("That’s all for today, folks.")
console.log("===>Próxima páginas ======>")