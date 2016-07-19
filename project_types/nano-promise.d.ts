declare module "_project/nano-promise" {

    function nanoPromise (host: string): {
        db: {
            use (name: string): {

                /** Возвращает список документов для запроса `query` */
                fetch(query: { keys: Array<string> }): Promise<CouchDb.DocumentsList<CouchDb.Document>>

                /** Возвращает список ревизий для объектов с указанными ключами */
                fetchRevs(query: { keys: Array<string> }): Promise<CouchDb.RevisionsList>
            }
        }
    }

    export = nanoPromise
}