interface Produto {
  modelo: string;
  fabricante: string;
  valor: number;
}

class TV implements Produto {
  constructor(
    public modelo: string,
    public resolucao: string,
    public tamanho: number,
    public fabricante: string,
    public valor: number
  ) {}
}

class Celular implements Produto {
  constructor(
    public modelo: string,
    public memoria: number,
    public fabricante: string,
    public valor: number
  ) {}
}

class Bicicleta implements Produto {
  constructor(
    public modelo: string,
    public tamanho: number,
    public fabricante: string,
    public valor: number
  ) {}
}

class Cart<T extends Produto> {
  private items: T[] = [];

  addItem(item: T) {
    this.items.push(item);
    this.updateCartDisplay();
  }

  removeItem(index: number) {
    this.items.splice(index, 1);
    this.updateCartDisplay();
  }

  getvalorTotal(): number {
    return this.items.reduce((total, item) => total + item.valor, 0);
  }

  updateCartDisplay() {
    const cartItemsElement = document.getElementById("cartItems")!;
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

    const valorTotalElement = document.getElementById("valorTotal")!;
    valorTotalElement.textContent = this.getvalorTotal().toFixed(2);
  }
}

const cart = new Cart<Produto>();

const produtoElement = document.getElementById("produto") as HTMLSelectElement;
const produtoForm = document.getElementById("produtoForm") as HTMLFormElement;

function toggleFields(produto: string) {
  document.querySelectorAll(".produtoCompleto-fields").forEach((field) => {
    const inputs = field.querySelectorAll("input");
    inputs.forEach((input) => (input.disabled = true));
    field.setAttribute("style", "display: none");
  });

  const activeFields = document.getElementById(`${produto}Fields`)!;
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

  let produtoCompleto: Produto | null = null;

  if (produto === "tv") {
    const modelo = (document.getElementById("modeloTV") as HTMLInputElement)
      .value;
    const resolucao = (
      document.getElementById("resolucaoTV") as HTMLInputElement
    ).value;
    const tamanho = parseInt(
      (document.getElementById("tamanhoTV") as HTMLInputElement).value,
      10
    );
    const fabricante = (
      document.getElementById("fabricanteTV") as HTMLInputElement
    ).value;
    const valor = parseFloat(
      (document.getElementById("valorTV") as HTMLInputElement).value
    );

    produtoCompleto = new TV(modelo, resolucao, tamanho, fabricante, valor);
  } else if (produto === "celular") {
    const modelo = (
      document.getElementById("modeloCelular") as HTMLInputElement
    ).value;
    const memoria = parseInt(
      (document.getElementById("memoriaCelular") as HTMLInputElement).value,
      10
    );
    const fabricante = (
      document.getElementById("fabricanteCelular") as HTMLInputElement
    ).value;
    const valor = parseFloat(
      (document.getElementById("valorCelular") as HTMLInputElement).value
    );

    produtoCompleto = new Celular(modelo, memoria, fabricante, valor);
  } else if (produto === "bicicleta") {
    const modelo = (
      document.getElementById("modeloBicicleta") as HTMLInputElement
    ).value;
    const tamanho = parseInt(
      (document.getElementById("tamanhoBicicleta") as HTMLInputElement).value,
      10
    );
    const fabricante = (
      document.getElementById("fabricanteBicicleta") as HTMLInputElement
    ).value;
    const valor = parseFloat(
      (document.getElementById("valorBicicleta") as HTMLInputElement).value
    );

    produtoCompleto = new Bicicleta(modelo, tamanho, fabricante, valor);
  }

  if (produtoCompleto) {
    cart.addItem(produtoCompleto);
    produtoForm.reset();
    toggleFields(produtoElement.value);
  }
});

toggleFields(produtoElement.value);
