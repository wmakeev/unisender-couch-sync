declare namespace CouchDb {
    export interface Response {
        ok: boolean
        id: string
        rev: string
    }

    export interface Error {
        error: string
        reason: string
    }

    export interface Revision {
        rev: string
    }

    export interface Document {
        /** Идентификатор токена в базе базе данных CouchDB */
        _id: string
        /** Ревизия токена в базе базе данных CouchDB */
        _rev: string
    }

    interface ErrorRow {
        key: string
        error: string
    }

    export interface Row {
        key: string
        id: string
    }

    export interface ValueRow<T> extends Row {
        value?: T
    }

    export interface DocumentRow<T> extends Row {
        doc?: T
    }

    export interface ListRow<Val, Doc> extends ValueRow<Val>, DocumentRow<Doc> {}


    export interface List<T extends Row> {
        total_rows: number
        offset: number
        rows: Array<T | ErrorRow>
    }

    export interface DocumentsList<T extends Document> extends List<ListRow<Revision, T>> {}

    export interface RevisionsList extends List<ValueRow<Revision>> {}
}