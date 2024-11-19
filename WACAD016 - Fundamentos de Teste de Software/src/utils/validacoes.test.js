const { primeiroNome } = require("./validacoes");

describe("primeiroNome()", () => {
  it("deve retornar o primeiro nome quando o nome completo é fornecido", () => {
    const fullName = "John Doe Etc";
    const result = primeiroNome(fullName);
    expect(result).toBe("John");
  });
});

it("deve retornar o proprio nome quando o nome completo contém apenas um espaço", () => {
  const fullName = "John Doe";
  const result = primeiroNome(fullName);
  expect(result).toBe("John Doe");
});
