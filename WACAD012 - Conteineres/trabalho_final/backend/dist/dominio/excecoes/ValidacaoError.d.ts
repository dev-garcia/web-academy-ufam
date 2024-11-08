import { ErroBase } from "./ErroBase";
declare class ValidacaoError extends ErroBase {
    constructor(mensagem: string, extras: object);
}
export { ValidacaoError };
