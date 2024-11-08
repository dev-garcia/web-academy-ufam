import { PrismaClient } from "@prisma/client";
import { ObjectMapper } from "@/common/ObjectMapper";
import { Livro } from "@/dominio/modelos/Livro";
import { LivrosRepository } from "@/dominio/repositorios/LivrosRepository";
import { LivroEntity } from "@/infraestrutura/bd/Entidades";
declare class PrismaLivrosRepository implements LivrosRepository {
    private conexao;
    private mapper;
    constructor(conexao: PrismaClient, mapper: ObjectMapper<LivroEntity, Livro>);
    buscarPorIsbn(isbn: string): Promise<Livro>;
    buscarTodos(): Promise<Livro[]>;
    buscarPorId(id: string): Promise<Livro>;
    existe(id: string): Promise<boolean>;
    remover(id: string): Promise<boolean>;
    salvar(livro: Livro): Promise<void>;
}
export { PrismaLivrosRepository };
