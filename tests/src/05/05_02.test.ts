import {CityType} from '../02/02_02';
import {getGreetingMassageForStreet, getStreetsTitlesOfGovernmentBuildings, getStreetsTitlesOfHouses} from './05_02';


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



test("List of streets titles of government buildings", () => {

    let streets = getStreetsTitlesOfGovernmentBuildings(city.governmentBuilding);


    expect(streets.length).toBe(2);
    expect(streets[0]).toBe("Central str");
    expect(streets[1]).toBe("South str");
})

test("List of streets titles", () => {

    let streets = getStreetsTitlesOfHouses(city.houses);


    expect(streets.length).toBe(3);
    expect(streets[0]).toBe("White street");
    expect(streets[1]).toBe("Happy street");
    expect(streets[2]).toBe("Happy street");
})

test('create greeting message for street', () => {

    let massage = getGreetingMassageForStreet(city.houses)

    expect(massage.length).toBe(3);
    expect(massage[0]).toBe("Hello guys from White street")
    expect(massage[1]).toBe("Hello guys from Happy street")
    expect(massage[2]).toBe("Hello guys from Happy street")
})
