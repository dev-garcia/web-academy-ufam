import { ObjectMapper } from "@/common/ObjectMapper";
import { Livro } from "@/dominio/modelos/Livro";
import { LivroEntity } from "./Entidades";
declare class LivroEntityMapper extends ObjectMapper<LivroEntity, Livro> {
    constructor();
    mapear(entity: LivroEntity): Promise<Livro>;
}
export { LivroEntityMapper };
