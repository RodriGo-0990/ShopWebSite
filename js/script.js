//====carrossel==================

let produtosList = document.querySelectorAll("div.produto");
let arrayProdutos = Array.from(produtosList);
let prodAtual = 0;

function previous() {
    if (prodAtual > 0) {
        prodAtual--;
    } else {
        prodAtual = 0;
    }

    arrayProdutos[prodAtual].scrollIntoView({
        inline: "center",
        behavior: "smooth"
    })

}
function next() {
    if (prodAtual < arrayProdutos.length - 1) {
        prodAtual++;
    } else {
        prodAtual = arrayProdutos.length - 1;
    }

    arrayProdutos[prodAtual].scrollIntoView({
        inline: "center",
        behavior: "smooth"
    })
}

//================================

//====formulário==================

const nome = document.getElementById("nome");
const sobrenome = document.getElementById("sobrenome");
const email = document.getElementById("email");
const telefone = document.getElementById("fone");
const data = document.getElementById("data");
const cpf = document.getElementById("cpf");




function enviar() {
    alert("Nome: "+nome.value+" "+sobrenome.value+"\n"+
          "Email: "+email.value+"\n"+
          "Telefone: "+telefone.value+"\n"+
          "Nascimento: "+data.value+"\n"+
          "CPF: "+cpf.value+" "+"\n"+
          "\n"+
          "ENVIADO!" 
    )
}
   
//=================================