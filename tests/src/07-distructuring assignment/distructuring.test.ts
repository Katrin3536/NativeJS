import { ManType } from "./Destructuring";

let props: ManType;
beforeEach(()=>{
    props = {
        name: 'Dimach',
        age: 32,
        lessons: [{title:1}, {title:2, name: 'Sergey'}, {title:3}],
        adress: {
            street: {
                title: 'Myastrovskaya'
            }
        }
    }
})

test("", ()=> {

    const {age,lessons} = props;
    const {title} = props.adress.street

    // let age = props.age;
    // let lessons = props.lessons

    expect(age).toBe(32);
    expect(lessons.length).toBe(3);
    expect(title).toBe('Myastrovskaya');


})

test('dsrtr', ()=> {

    // const l1 = props.lessons[0];
    // const l2 = props.lessons[1];
    // const l3 = props.lessons[2];

    const [,, ls3]=props.lessons;
    const [ls1, ...REstLessons] = props.lessons;

    // expect(l1.title).toBe(1);
    // expect(l2.title).toBe(2);

    expect(ls1.title).toBe(1);
    // expect(ls2.title).toBe(2);
    expect(ls3.title).toBe(3);
    expect(REstLessons.length).toBe(2);
expect(REstLessons[0]).toStrictEqual({title:2,name: 'Sergey'})

})