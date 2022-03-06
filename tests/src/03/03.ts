import {StudentType} from '../02/02';
import {CityType, GovernmentBuildingType, HouseType} from '../02/02_02';
import exp from 'constants';

export const sum = (a: number, b: number) => {
    return a + b;
};

export const addSkill = (student: StudentType, skill: string) => {
    student.technologies.push({
        id: new Date().getTime(),
        title: skill
    });
};


export const makeStudentInactive = (s: StudentType) => {
    s.isActive = false;
};

export const studentLiveInCity = (st: StudentType, city: string) => {
    return st.adress.city.title === city;
};

export const addMoneyToBudget = (building: GovernmentBuildingType, budget: number) => {
    building.budget += budget;
};

export const repairHouse = (houseType: HouseType) => {
    houseType.repaired = true;
}

export const toFireStaff = (building:GovernmentBuildingType, staffCountToFire: number) => {
building.staffCount -= staffCountToFire;
}

export const toHireStaff = (building:GovernmentBuildingType, staffCountToHire: number) => {
    building.staffCount += staffCountToHire;
}

export const createMessage = (props:CityType) => {
    return `Hello ${props.title} citizens. I want to you be happy. All ${props.citizensNumber} men.`;
}

