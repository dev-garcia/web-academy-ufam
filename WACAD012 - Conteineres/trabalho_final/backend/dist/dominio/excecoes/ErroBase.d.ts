declare abstract class ErroBase extends Error {
    private readonly _tipo;
    private readonly _mensagem;
    private readonly _extras;
    constructor(tipo: string, mensagem: string, extras: any);
    get tipo(): string;
    get mensagem(): string;
    get extras(): any;
}
export { ErroBase };
