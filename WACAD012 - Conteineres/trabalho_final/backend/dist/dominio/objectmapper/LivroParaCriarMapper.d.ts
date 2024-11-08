import { ObjectMapper } from "@/common/ObjectMapper";
import { LivroParaCriarDTO } from "../dto/LivroParaCriarDTO";
import { Livro } from "../modelos/Livro";
declare class LivroParaCriarMapper extends ObjectMapper<LivroParaCriarDTO, Livro> {
    constructor();
    mapear(dto: LivroParaCriarDTO): Promise<Livro>;
}
export { LivroParaCriarMapper };
