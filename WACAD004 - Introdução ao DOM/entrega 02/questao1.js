const lista = document.getElementById("lista-itens-1");
const primeiroFilho = lista.firstElementChild;
const ultimoFilho = lista.lastElementChild;
console.log("Primeiro filho:", primeiroFilho);
console.log("Último filho:", ultimoFilho);

const paiLista = lista.parentElement;
console.log("Pai da lista:", paiLista);

const todosFilhos = lista.children;
console.log("Todos os filhos da lista:");
for (let filho of todosFilhos) {
  console.log(filho);
}

const itemDois = document.getElementById("two");
const irmaoAnterior = itemDois.previousElementSibling;
const irmaoProximo = itemDois.nextElementSibling;
console.log('Irmão anterior":', irmaoAnterior);
console.log('Irmão próximo":', irmaoProximo);
