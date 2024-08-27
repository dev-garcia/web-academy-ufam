const listarItens = document.querySelectorAll(".lista-itens-2 li");

const listarItensHot = document.querySelectorAll(".lista-itens-2 li.hot");

listarItens.forEach((item) => {
  console.log("Todos os itens: " + item.outerHTML);
});

listarItensHot.forEach((item) => {
  console.log("Itens com class hot: " + item.outerHTML);
});
