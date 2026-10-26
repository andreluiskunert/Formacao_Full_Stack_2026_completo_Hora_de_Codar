console.log("Curso de JavaScript do básico ao avançado com projetos ")
console.log("Arrays & Objetos_02ª") 
// Domingo_D'noite, 25/10/2026
console.log("8ª Métodos de array:slice")
const testeSlice = ["a", "b", "c", "d", "e", "f"]
const subArray = testeSlice.slice(2, 4)
console.log(subArray)
console.log(testeSlice)
const subArray2 = testeSlice.slice(2, 4 + 1)
console.log(subArray2)
const subArray3 = testeSlice.slice(10, 20)
console.log(subArray3)
const subArray4 = testeSlice.slice(2)
console.log(subArray4)
console.log("---//---////------///----///-----")
console.log("9ª ForEach ")
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(nums)
nums.forEach((number) =>{
    console.log(`O número é ${number}`)
} ) 
const posts = [
    {title : "Primeiro post", category: "JavaScript"},
    {title : "Segundo post", category: "Java"},
    {title : "Terceiro post", category: "Python"},
    {title : "Quarto post", category: "PHP"},

]
posts.forEach((post) => {
    console.log(`Exbindo post: ${post.title}, da categoria: ${post.category}`)
})
console.log("The End")
console.log("===> Próxima pagina em JS===> ")