export interface ApiResponse<T>{
    error: any;
    response: T;
    success: false;
}