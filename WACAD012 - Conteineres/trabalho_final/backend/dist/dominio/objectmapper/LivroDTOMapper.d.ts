import { ObjectMapper } from "@/common/ObjectMapper";
import { LivroDTO } from "../dto/LivroDTO";
import { Livro } from "../modelos/Livro";
declare class LivroDTOMapper extends ObjectMapper<Livro, LivroDTO> {
    constructor();
    mapear(modelo: Livro): Promise<LivroDTO>;
}
export { LivroDTOMapper };
