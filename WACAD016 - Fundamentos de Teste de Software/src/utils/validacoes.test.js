const {
  primeiroNome,
  verificarDisponibilidadeEstoque,
  calcularPrecoTotal,
} = require("./validacoes");

describe("primeiroNome", () => {
  it("deve retornar o primeiro nome quando o nome completo é fornecido", () => {
    expect(primeiroNome("Cristian Garcia Maia")).toBe("Cristian");
  });

  it("deve retornar o próprio nome se não houver espaços", () => {
    expect(primeiroNome("Cristian")).toBe("Cristian");
  });

  it("deve lidar corretamente com strings vazias", () => {
    expect(primeiroNome("")).toBe("");
  });
});

describe("verificarDisponibilidadeEstoque", () => {
  it("deve retornar true se o estoque é suficiente", () => {
    expect(verificarDisponibilidadeEstoque("laptop", 5)).toBe(true);
  });

  it("deve retornar false se o estoque não é suficiente", () => {
    expect(verificarDisponibilidadeEstoque("headphone", 10)).toBe(false);
  });

  it("deve retornar false para itens inexistentes no estoque", () => {
    expect(verificarDisponibilidadeEstoque("camera", 1)).toBe(false);
  });
});

describe("calcularPrecoTotal", () => {
  it("deve calcular o total corretamente para múltiplos produtos", () => {
    const produtos = [
      { preco: 10, quantidade: 2 },
      { preco: 15, quantidade: 3 },
    ];
    expect(calcularPrecoTotal(produtos)).toBe(65);
  });

  it("deve retornar 0 para uma lista vazia de produtos", () => {
    expect(calcularPrecoTotal([])).toBe(0);
  });

  it("deve lidar corretamente com produtos com quantidade 0", () => {
    const produtos = [{ preco: 10, quantidade: 0 }];
    expect(calcularPrecoTotal(produtos)).toBe(0);
  });
});
