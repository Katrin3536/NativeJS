import {StudentType} from '../02/02';
import {addSkill, makeStudentInactive, studentLiveInCity} from './03';

let student: StudentType;
beforeEach(() => {
    student = {
        id: 1,
        name: 'Kate',
        age: 20,
        isActive: true,
        adress: {
            srteetTitle: 'Mironova 15',
            city: {
                title: 'Vilnus',
                countryTitle: 'Lithvinia'
            }
        },
        technologies: [
            {
                id: 1,
                title: 'HTML'
            },
            {
                id: 2,
                title: 'CSS'
            },
            {
                id: 3,
                title: 'JS'
            }
        ]
    }
})

test("new tech skill should be added to student", () => {
     expect(student.technologies.length).toBe(3);

     addSkill(student, "JS");

    expect(student.technologies.length).toBe(4);
     expect(student.technologies[3].title).toBe("JS");
     expect(student.technologies[3].id).toBeDefined();
})


test("student should be inactive", () => {
    expect(student.isActive).toBe(true);

    makeStudentInactive(student);

    expect(student.isActive).toBe(false);;

})
test("Is student in city?", () => {

    let result1 = studentLiveInCity(student,"Minsk");
    let result2 = studentLiveInCity(student,"Vilnus");

    expect(result1).toBe(false);
    expect(result2).toBe(true);

})