console.log("4ª Tratamento de Dados ")
 function checkNumber(n){
   const  result = Number(n)
   if(Number.isNaN(result)){
     console.log("Valor Incorreto");
     return;

   }
   console.log("Valor Correto..");
   return result;
 }
 checkNumber(5);
 checkNumber("11");
 checkNumber({});
 checkNumber("teste");
 
console.log("The End")