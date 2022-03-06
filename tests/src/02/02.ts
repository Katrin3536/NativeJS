type TechType = {
    id: number;
    title: string;
}
type LocalCityType = {
    title: string;
    countryTitle: string;
}
type AdressType = {
    srteetTitle: string;
    city: LocalCityType;
}

type StudentType = {
    id: number;
    name: string;
    age: number;
    isActive: boolean;
    adress: AdressType;
    technologies: Array<TechType>
}

const student: StudentType = {
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

};

console.log(student.name);
console.log(student.age);
console.log(student.adress.city.title);
console.log(student.technologies[2].title);
