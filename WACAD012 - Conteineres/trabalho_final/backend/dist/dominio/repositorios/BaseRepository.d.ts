interface BaseRepository<K, V> {
    buscarTodos(): Promise<K[]>;
    buscarPorId(id: V): Promise<K>;
    existe(id: V): Promise<boolean>;
    remover(id: V): Promise<any>;
    salvar(registro: K): Promise<any>;
}
export { BaseRepository };
