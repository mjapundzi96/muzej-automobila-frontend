export interface ApiError {
    message: string;
    messageKey: string;
}

export interface ApiResult {
    error: ApiError;
    success: false;
}

export interface ListPagination {
    currentPage: number,
    size: number,
    sortDirection: string,
    sortProperty: string,
}

export interface ListPage extends ListPagination {
    totalElements: number,
    totalPages: number
}

export interface ApiSingleResult<T> extends ApiResult{
    response: T;
}

export interface ApiPageResult<T> extends ApiResult{
    response: Array<T>
    page: ListPage
}

export interface FetchAllBody<T> {
    command: T;
    pagination: ListPagination
}