declare abstract class ObjectMapper<K, V> {
    mapearLista(listaOrigem: K[]): Promise<V[]>;
    abstract mapear(origem: K): Promise<V>;
}
export { ObjectMapper };
