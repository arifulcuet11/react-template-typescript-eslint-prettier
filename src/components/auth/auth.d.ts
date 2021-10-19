export interface LoginRequest {
    email: string;
    password: string;
}
export interface User {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    jwtToken: string;
}
