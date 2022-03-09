export type StreetType = {
    title: string
}

export type AdressType = {
    number?: number
    street: StreetType
}

export type HouseType = {
    id?: number
    buildedAt: number;
    repaired: boolean;
    adress:AdressType
}

export type GovernmentBuildingType = {
    type: "HOSPITAL" | "FIRE-STATION";
    budget: number;
    staffCount: number;
    adress: AdressType
}

export type CityType = {
    title: string;
    houses: Array<HouseType>
    governmentBuilding: Array<GovernmentBuildingType>
    citizensNumber: number
}