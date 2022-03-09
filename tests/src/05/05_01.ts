export type ManType = {
    name: string,
    age: number
}

const people:Array<ManType> = [
    {name: "Vasya Petrov", age: 25},
    {name: "Yulia Ivanova", age: 41},
    {name: "Maksim Fedorov", age: 29},
]

const dymichTransformator = (man:ManType) =>({

       stack: ['css', 'js', 'tdd', 'react', 'html'],
       firstName: man.name.split(' ')[0],
       lastName: man.name.split(' ')[1]
})

const devs = [
    {
        stack: ['css', 'js', 'tdd', 'react', 'html'],
        firstName: 'Vasya',
        lastName: 'Petrov'
    },
    {
        stack: ['css', 'js', 'tdd', 'react', 'html'],
        firstName: 'Yulia',
        lastName: 'Ivanova'
    },
    {
        stack: ['css', 'js', 'tdd', 'react', 'html'],
        firstName: 'Maksim',
        lastName: 'Fedorov'
    },
]

// let d1 = dymichTransformator(people[0]);
// let d2 = dymichTransformator(people[1]);
// let d3 = dymichTransformator(people[2]);

const dev2 = [
    dymichTransformator(people[0]),
    dymichTransformator(people[1]),
    dymichTransformator(people[2])
]

const dev3 = people.map(dymichTransformator);

const dev4 = people.map(man => ({
    stack: ['css', 'js', 'tdd', 'react', 'html'],
    firstName: man.name.split(' ')[0],
    lastName: man.name.split(' ')[1]
}))

// devs1 = devs2 = devs3 = devs4

let message = people.map(man => `Hello ${man.name.split(' ')[0]}. Welcome to incubator!`)

export const createGreetingMassage = (people:Array<ManType>) => {
   return people.map(man => `Hello ${man.name.split(' ')[0]}. Welcome to incubator!`)
  
}