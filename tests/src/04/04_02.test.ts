import {CityType} from '../02/02_02';
import {demolishHousesOnTheStreet, getBuildingWithCorrectStaffCountGreaterThan} from './04_02';


let city: CityType;

beforeEach(() => {
    city = {
        title: 'New York',
        houses: [{
            id: 1,
            buildedAt:2012,
            repaired: false,
            adress: {
                number: 100,
                street: {title:'White street' }
            },

        },{
            id: 2,
            buildedAt:2008,
            repaired: false,
            adress: {
                number: 100,
                street: {title:'Happy street' }
            },
        },{
            id: 3,
            buildedAt:2020,
            repaired: false,
            adress: {
                number: 101,
                street: {title:'Happy street' }
            },
        }],
        governmentBuilding: [{
            type: 'HOSPITAL',
            budget: 200000,
            staffCount: 200,
            adress: {
                number: 200,
                street: {title:'Central str' }
            }
        },{
            type: "FIRE-STATION",
            budget: 500000,
            staffCount: 1000,
            adress: {
                street: {title:'South str' }
            }
        }],
        citizensNumber: 1000000

    };
});



test("Houses should be destroyed", () => {

   demolishHousesOnTheStreet(city, "Happy street");

    expect(city.houses.length).toBe(1);
    expect(city.houses[0].id).toBe(1);
})


test("Buildings with correct staff count", () => {

    let building = getBuildingWithCorrectStaffCountGreaterThan (city.governmentBuilding, 500);

    expect(building.length).toBe(1);
    expect(building[0].type).toBe("FIRE-STATION");
})







// test("List of streets titles of houses", () => {
//
//     let happyHouses = getHousesOnTheStreet(city.houses, "Happy street");
//     let whiteHouses = getHousesOnTheStreet(city.houses, "Happy street");
//
//
//     expect(happyHouses.length).toBe(2);
//     expect(whiteHouses.length).toBe(1);
// })