test('should take old men older than 90', () => {
    const ages = [1, 80, 55, 100, 90, 15];


    const oldAges = ages.filter(age => age > 90);

    expect(oldAges.length).toBe(1);
    expect(oldAges[0]).toBe(100);
});

test('should take courses cheaper than 200', () => {
    const courses = [
        {title: 'css', price: 100},
        {title: 'js', price: 200},
        {title: 'react', price: 150},

    ];


    const cheapCourses = courses.filter(course => course.price < 200);

    expect(cheapCourses.length).toBe(2);
    expect(cheapCourses[1].price).toBe(150);


});

test('get only completed task', () => {

    const tasks = [
        {id: 1, title: 'Milk', isDone: true},
        {id: 2, title: 'Sugar', isDone: false},
        {id: 3, title: 'Pepper', isDone: true},
        {id: 4, title: 'Ice-cream', isDone: true},

    ];

    const completedTask = tasks.filter(task => task.isDone )


    expect(completedTask.length).toBe(3);
    expect(completedTask[1].id).toBe(3);
    expect(completedTask[2].id).toBe(4);


});



test('get only uncompleted task', () => {

    const tasks = [
        {id: 1, title: 'Milk', isDone: true},
        {id: 2, title: 'Sugar', isDone: false},
        {id: 3, title: 'Pepper', isDone: true},
        {id: 4, title: 'Ice-cream', isDone: true},

    ];

    const uncompletedTask = tasks.filter(task => !task.isDone )


    expect(uncompletedTask.length).toBe(1);
    expect(uncompletedTask[0].id).toBe(2);



});