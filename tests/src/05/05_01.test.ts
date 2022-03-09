import {createGreetingMassage, ManType} from './05_01';


let people:Array<ManType> = []

 beforeEach(()=> {
    people = [
         {name: "Vasya Petrov", age: 25},
         {name: "Yulia Ivanova", age: 41},
         {name: "Maksim Fedorov", age: 29},
     ]
 })

test('should get array of greeting masseges', () => {

    let message = createGreetingMassage(people)

    expect(message.length).toBe(3);
    expect(message[0]).toBe("Hello Vasya. Welcome to incubator!")
    expect(message[1]).toBe("Hello Yulia. Welcome to incubator!")
    expect(message[2]).toBe("Hello Maksim. Welcome to incubator!")
})