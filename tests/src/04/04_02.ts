import {CityType, GovernmentBuildingType, HouseType} from '../02/02_02';

export const demolishHousesOnTheStreet = (city: CityType, street: string) => {
    city.houses = city.houses.filter( h => h.adress.street.title !== street)
}


export const getBuildingWithCorrectStaffCountGreaterThan = (building: Array<GovernmentBuildingType>, count: number) => {
    return building.filter(b => b.staffCount > count)

}