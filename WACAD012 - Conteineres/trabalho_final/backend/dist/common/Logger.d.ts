declare class Logger {
    private diretorioLog;
    private deveEscreverEmArquivo;
    private static instancia;
    private constructor();
    info(mensagem: string): void;
    warning(mensagem: string): void;
    error(mensagem: string): void;
    private prepararMensagemLog;
    private escreverLogEmArquivo;
    static pegarInstancia(): Logger;
}
export { Logger };
