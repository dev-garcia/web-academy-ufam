let alterarPlanoFundo = document.querySelector("h1");

alterarPlanoFundo.style.backgroundColor = "purple";

let adicionarClasse = document.querySelector("#lista-titulo");

adicionarClasse.className += `lista`;

let AddNegritoItensHot = document.querySelectorAll("#lista-itens li.hot");

AddNegritoItensHot.forEach(function (item) {
  item.setAttribute("style", "font-weight: bold;");
});
