declare class ValidadorLivro {
    private constructor();
    nome(valor?: string): ValidadorLivro;
    sinopse(valor?: string): ValidadorLivro;
    isbn(valor?: string): ValidadorLivro;
    urlImagem(valor?: string): ValidadorLivro;
    autores(valor?: string[]): ValidadorLivro;
    static instanciar(): ValidadorLivro;
}
export { ValidadorLivro };
