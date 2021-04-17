export interface ManufacturerBody {
    name: string;
    country: string;
    address: string;
    dateOfCreation: string;
}

export interface ManufacturerResponse extends ManufacturerBody {
    id: number;
}