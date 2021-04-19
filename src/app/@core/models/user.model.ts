import { ApiPageResult, ApiSingleResult, FetchAllBody } from "./api.model";

export interface User {
    active: boolean
    address: string
    dateOfBirth: string
    dateOfEmployment: string
    email: string
    firstName: string
    id: number
    lastName: string
    oib: string | null
    position: string | null
    image: string;
    userRole:string;
}

export interface UserBody extends User{
    password:string;
}

export type UserResponse = User /* & {
    userRole:{
        id: number;
        name: string;
    }
}; */

export type UserSingleResult = ApiSingleResult<UserResponse>

export type UsersAllResult = ApiPageResult<UserResponse>

export type UsersAllBody = FetchAllBody<Partial<UserResponse>>