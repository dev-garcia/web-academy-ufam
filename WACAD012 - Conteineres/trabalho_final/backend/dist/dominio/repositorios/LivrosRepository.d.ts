import { BaseRepository } from "./BaseRepository";
import { Livro } from "../modelos/Livro";
interface LivrosRepository extends BaseRepository<Livro, string> {
    buscarPorIsbn(isbn: string): Promise<Livro>;
}
export { LivrosRepository };
