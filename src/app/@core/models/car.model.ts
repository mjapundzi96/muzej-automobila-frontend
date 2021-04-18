import { ApiPageResult, ApiSingleResult, FetchAllBody } from "./api.model";
import { Engine } from "./engine.model";
import { Manufacturer } from "./manufacturer.model";

export interface Car {
    id: number;
    name: string;
    color: string;
    manufactureDate: string;
    maker: Manufacturer;
    owner: number;
    image: string;
    motor: Engine;
}

export type CarBody = Car;

export type CarResult = Car;

export type CarSingleResult = ApiSingleResult<Car>

export type CarsAllResult = ApiPageResult<Car>

export type CarsAllBody = FetchAllBody<Partial<Car>>