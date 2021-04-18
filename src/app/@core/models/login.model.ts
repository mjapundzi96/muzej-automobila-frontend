import { ApiSingleResult } from "./api.model";
import { UserResponse } from "./user.model";


export interface LoginBody {
    email: string;
    password: string;
}

export interface LoginResponse {
    jwtToken: string;
    refreshToken: string;
    user: UserResponse
}

export type LoginResult = ApiSingleResult<LoginResponse>