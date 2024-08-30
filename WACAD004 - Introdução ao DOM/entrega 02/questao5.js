document.getElementById("add-button").addEventListener("click", function () {
  const novoItemTexto = document.getElementById("item-input").value.trim();

  if (novoItemTexto !== "") {
    const novoItem = document.createElement("li");

    novoItem.textContent = novoItemTexto;

    const lista = document.getElementById("lista-itens");
    lista.appendChild(novoItem);

    document.getElementById("item-input").value = "";
  } else {
    alert("Não é permitido adicionar itens vazios, preencha o campo!");
  }
});

document.getElementById("remove-button").addEventListener("click", function () {
  const lista = document.getElementById("lista-itens");

  if (lista.children.length > 0) {
    const ultimoItem = lista.lastElementChild;

    lista.removeChild(ultimoItem);
  } else {
    alert(
      "Não há itens para remover, é necessário pelo menos um (1) elemento presente na lista de itens."
    );
  }
});
