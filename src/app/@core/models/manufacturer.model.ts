import { ApiPageResult, ApiSingleResult, FetchAllBody } from "./api.model";

export interface Manufacturer {
    name: string;
    country: string;
    address: string;
    dateOfCreation: string;
    id:number;
}

export type ManufacturerResponse = Manufacturer;

export type ManufacturersAllBody = FetchAllBody<Partial<ManufacturerResponse>>;

export type ManufacturersAllResult = ApiPageResult<ManufacturerResponse>

export type ManufacturerSingleResult = ApiSingleResult<ManufacturerResponse>

