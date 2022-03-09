import {GovernmentBuildingType, HouseType} from '../02/02_02';

export const getStreetsTitlesOfGovernmentBuildings = (city: Array<GovernmentBuildingType>) => {
    return city.map( b => b.adress.street.title);
}

export const getStreetsTitlesOfHouses = (city:Array<HouseType>) => {
    return city.map (h => h.adress.street.title);
}

export const getGreetingMassageForStreet = (houses:Array<HouseType>) => {
    return houses.map( h => `Hello guys from ${h.adress.street.title}`)

}