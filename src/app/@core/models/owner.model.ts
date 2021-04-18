import { ApiPageResult, ApiSingleResult, FetchAllBody } from "./api.model";

export interface Owner{
    id: number;
    firstName:string;
    lastName:string;
    oib: string;
    address: string;
    dateOfBirth: string;
    image: string;
}

export type OwnerResponse = Owner;

export type OwnerBody = Owner

export type OwnerSingleResult = ApiSingleResult<Owner>;

export type OwnersAllResult = ApiPageResult<Owner>

export type OwnersAllBody = FetchAllBody<Partial<Owner>>



