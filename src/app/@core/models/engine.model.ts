import { ApiPageResult, ApiSingleResult, FetchAllBody } from "./api.model";
import { Manufacturer } from "./manufacturer.model";

export enum EngineType{
    PETROL = "petrol",
    DIESEL = "diesel"
}

export interface Engine {
    id: number;
    name: string;
    power: number;
    torque: number;
    type: EngineType;
    maker: Manufacturer
}

export type EngineBody = Engine;

export type EnginesAllBody = FetchAllBody<Partial<Engine>>;

export type EngineSingleResult = ApiSingleResult<Engine>;

export type EnginesAllResult = ApiPageResult<Engine>