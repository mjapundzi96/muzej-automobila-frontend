export interface ApiError{
    message: string;
    messageKey: string;
}

export interface ApiResult<T>{
    error: ApiError;
    response: T;
    success: false;
}