export type HttpResponseT<T> = {
    data: T;
    error: string | Error | null;
    hasError: boolean;
};

export type HttpListResponseT<T> = {
    totalRowCount: string;
    list: T[];
    exception: boolean;
};

export interface RequestParamsI {
    count?: number;
    skip?: number;
    title?: string;
    orderBy?: string;
    isActive?: boolean;
}

export interface HttpErrorI {
    errorMessage: string | undefined;
    statusCode: number | undefined;
}
