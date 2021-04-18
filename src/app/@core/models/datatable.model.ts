

export interface PageInfo {
    count: number;
    limit: number;
    offset: number;
    pageSize: number;
}

export interface SortInfo {
    sorts: Array<{
        dir: 'asc' | 'desc',
        prop: string;
    }>
}