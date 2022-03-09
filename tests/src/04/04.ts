const ages = [1, 80 , 55, 100 , 90, 15];

const predicate = (age: number) => {
    return age > 90;
};

const oldAges = [100];

const courses = [
    {title: "css", price: 100},
    {title: "js", price: 200},
    {title: "react", price: 150},

]

type CoursesType = {
    title: string,
    price: number
}


const cheapPredicate = (course: CoursesType) => {
    return course.price < 200;
}

const cheapCourses = [
    {title: "css", price: 100},
    {title: "react", price: 150}
]