// selecione elementos
// Sexta-feira_D'noite,20/11/2026
const root = document.documentElement;
const btn = document.getElementById("btnTema");
const ano = document.getElementById("ano")
//  preencher ano:
 ano.textContent = new Date().getFullYear()
// alterar tema:
btn.addEventListener("click", () =>{
    const escuro = root.getAttribute("data-tema") === 'escuro'
    if (escuro) {
        root.removeAttribute("data-time")
    } else{
       root.setAttribute("data-tema", "escuro")
    }
})
