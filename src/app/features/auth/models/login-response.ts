export interface LoginResponse {
    status: boolean;
    message: string;
    token: string;
    token_type: string;
    user: any;
}