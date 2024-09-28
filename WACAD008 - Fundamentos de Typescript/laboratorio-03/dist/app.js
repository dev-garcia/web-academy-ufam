"use strict";
class TV {
  constructor(modelo, resolucao, tamanho, fabricante, valor) {
    this.modelo = modelo;
    this.resolucao = resolucao;
    this.tamanho = tamanho;
    this.fabricante = fabricante;
    this.valor = valor;
  }
}
class Celular {
  constructor(modelo, memoria, fabricante, valor) {
    this.modelo = modelo;
    this.memoria = memoria;
    this.fabricante = fabricante;
    this.valor = valor;
  }
}
class Bicicleta {
  constructor(modelo, tamanho, fabricante, valor) {
    this.modelo = modelo;
    this.tamanho = tamanho;
    this.fabricante = fabricante;
    this.valor = valor;
  }
}
class Cart {
  constructor() {
    this.items = [];
  }
  addItem(item) {
    this.items.push(item);
    this.updateCartDisplay();
  }
  removeItem(index) {
    this.items.splice(index, 1);
    this.updateCartDisplay();
  }
  getvalorTotal() {
    return this.items.reduce((total, item) => total + item.valor, 0);
  }
  updateCartDisplay() {
    const cartItemsElement = document.getElementById("cartItems");
    cartItemsElement.innerHTML = "";
    this.items.forEach((item, index) => {
      const li = document.createElement("li");
      if (item instanceof TV) {
        li.textContent = `TV: ${item.modelo}, Resolução: ${
          item.resolucao
        }, Tamanho: ${item.tamanho}, Fabricante: ${
          item.fabricante
        } - R$${item.valor.toFixed(2)}`;
      } else if (item instanceof Celular) {
        li.textContent = `Celular: ${item.modelo}, Memória: ${
          item.memoria
        }GB, Fabricante: ${item.fabricante} - R$${item.valor.toFixed(2)}`;
      } else if (item instanceof Bicicleta) {
        li.textContent = `Bicicleta: ${item.modelo}, Tamanho do Aro: ${
          item.tamanho
        }, Fabricante: ${item.fabricante} - R$${item.valor.toFixed(2)}`;
      }
      const removerProduto = document.createElement("button");
      removerProduto.textContent = "Remover";
      removerProduto.onclick = () => this.removeItem(index);
      li.appendChild(removerProduto);
      cartItemsElement.appendChild(li);
    });
    const valorTotalElement = document.getElementById("valorTotal");
    valorTotalElement.textContent = this.getvalorTotal().toFixed(2);
  }
}
const cart = new Cart();
const produtoElement = document.getElementById("produto");
const produtoForm = document.getElementById("produtoForm");
function toggleFields(produto) {
  document.querySelectorAll(".produtoCompleto-fields").forEach((field) => {
    const inputs = field.querySelectorAll("input");
    inputs.forEach((input) => (input.disabled = true));
    field.setAttribute("style", "display: none");
  });
  const activeFields = document.getElementById(`${produto}Fields`);
  activeFields.style.display = "block";
  const activeInputs = activeFields.querySelectorAll("input");
  activeInputs.forEach((input) => (input.disabled = false));
}
produtoElement.addEventListener("change", () => {
  const produto = produtoElement.value;
  toggleFields(produto);
});
produtoForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const produto = produtoElement.value;
  let produtoCompleto = null;
  if (produto === "tv") {
    const modelo = document.getElementById("modeloTV").value;
    const resolucao = document.getElementById("resolucaoTV").value;
    const tamanho = parseInt(document.getElementById("tamanhoTV").value, 10);
    const fabricante = document.getElementById("fabricanteTV").value;
    const valor = parseFloat(document.getElementById("valorTV").value);
    produtoCompleto = new TV(modelo, resolucao, tamanho, fabricante, valor);
  } else if (produto === "celular") {
    const modelo = document.getElementById("modeloCelular").value;
    const memoria = parseInt(
      document.getElementById("memoriaCelular").value,
      10
    );
    const fabricante = document.getElementById("fabricanteCelular").value;
    const valor = parseFloat(document.getElementById("valorCelular").value);
    produtoCompleto = new Celular(modelo, memoria, fabricante, valor);
  } else if (produto === "bicicleta") {
    const modelo = document.getElementById("modeloBicicleta").value;
    const tamanho = parseInt(
      document.getElementById("tamanhoBicicleta").value,
      10
    );
    const fabricante = document.getElementById("fabricanteBicicleta").value;
    const valor = parseFloat(document.getElementById("valorBicicleta").value);
    produtoCompleto = new Bicicleta(modelo, tamanho, fabricante, valor);
  }
  if (produtoCompleto) {
    cart.addItem(produtoCompleto);
    produtoForm.reset();
    toggleFields(produtoElement.value);
  }
});
toggleFields(produtoElement.value);
