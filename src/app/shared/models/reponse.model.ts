export interface ResponseModel<T> {
    success: boolean;
    message: string;
    data: T;
}

export interface PaginatedResponseModel<T> {
    success: boolean;
    message: string;
    data: T[];
    currentPage: number;
    totalPages: number;
    totalItems: number;
}

export interface ErrorResponseModel {
    success: boolean;
    message: string;
    errorCode: number;
}   