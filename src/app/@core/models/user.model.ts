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
}

export interface UserBody extends User{
    password:string;
}

export interface UserResponse extends User{
    userRole:string;
}