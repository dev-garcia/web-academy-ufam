import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ItemFavorito from "../ItemFavorito";

/* eslint-disable @next/next/no-img-element */
// professora não encontrei outra soulção para o erro de image do next, apenas desabilitar a regra de lint dada pelo copilot
// Aqui tem algumas soluções, mas nenhuma resolveu o problema: https://github.com/vercel/next.js/discussions/32325#discussioncomment-3164774
jest.mock("next/image", () => {
  const MockImage = ({ src, alt, ...props }: any) => {
    return <img src={src} alt={alt} {...props} />;
  };
  MockImage.displayName = "MockImage";
  return MockImage;
});
/* eslint-enable @next/next/no-img-element */

describe("ItemFavorito", () => {
  const produtoMock: Produto = {
    id: "notebook-3",
    fotos: [
      {
        titulo: "notebook-3",
        src: "https://ranekapi.origamid.dev/wp-content/uploads/2019/03/notebook-3.jpg",
      },
    ],
    nome: "Notebook Pro",
    preco: "3000",
    desconto: 20,
    descricao: "Notebook de alta performance",
    vendido: "false",
    usuario_id: "joao@origamid.com",
  };

  const setup = (setFavoritos = jest.fn()) => {
    render(
      <table>
        <tbody>
          <ItemFavorito
            itemFavorito={produtoMock}
            setFavoritos={setFavoritos}
          />
        </tbody>
      </table>
    );
  };

  it("deve renderizar o nome do produto", () => {
    setup();
    expect(screen.getByText(produtoMock.nome)).toBeInTheDocument();
  });

  it("deve calcular e renderizar o preço com desconto corretamente", () => {
    setup();
    const precoComDesconto = (
      Number(produtoMock.preco) -
      (Number(produtoMock.preco) * produtoMock.desconto) / 100
    ).toFixed(2);
    expect(screen.getByText(`R$ ${precoComDesconto}`)).toBeInTheDocument();
  });

  it("deve renderizar a descrição do produto", () => {
    setup();
    expect(screen.getByText(produtoMock.descricao)).toBeInTheDocument();
  });

  it("deve renderizar a imagem do produto com o alt correto", () => {
    setup();
    const imagem = screen.getByAltText(
      produtoMock.fotos[0].titulo
    ) as HTMLImageElement;
    expect(imagem).toBeInTheDocument();
    expect(imagem.src).toBe(produtoMock.fotos[0].src);
  });

  it("deve renderizar o botão de remover", () => {
    setup();
    const botaoRemover = screen.getByRole("button", { name: /Remover/i });
    expect(botaoRemover).toBeInTheDocument();
  });

  it("ao clicar no botão de remover, a função setFavoritos é chamada corretamente", async () => {
    const setFavoritosMock = jest.fn();
    setup(setFavoritosMock);
    const botaoRemover = screen.getByRole("button", { name: /Remover/i });
    await userEvent.click(botaoRemover);
    expect(setFavoritosMock).toHaveBeenCalledTimes(1);
    expect(setFavoritosMock).toHaveBeenCalledWith(expect.any(Function));
  });

  it("deve remover o produto da lista ao clicar no botão", async () => {
    const setFavoritosMock = jest.fn((updateFn) => {
      const newState = updateFn([produtoMock]);
      expect(newState).toEqual([]);
    });
    setup(setFavoritosMock);
    const botaoRemover = screen.getByRole("button", { name: /Remover/i });
    await userEvent.click(botaoRemover);
    expect(setFavoritosMock).toHaveBeenCalledTimes(1);
  });
});
