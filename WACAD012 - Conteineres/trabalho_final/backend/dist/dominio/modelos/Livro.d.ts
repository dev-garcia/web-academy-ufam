type LivroParams = {
    id: string;
    nome: string;
    sinopse: string;
    isbn: string;
    urlImagem?: string;
    autores: string[];
};
declare class Livro {
    private _id;
    private _nome;
    private _sinopse;
    private _isbn;
    private _urlImagem?;
    private _autores;
    constructor(params: LivroParams);
    get id(): string;
    get nome(): string;
    set nome(novoNome: string);
    get sinopse(): string;
    set sinopse(novaSinopse: string);
    get isbn(): string;
    set isbn(novoIsbn: string);
    get urlImagem(): string | undefined;
    set urlImagem(novaUrlImagem: string | undefined);
    get autores(): string[];
    set autores(novosAutores: string[]);
    private validar;
}
export { Livro };
