const user:UserType = {
    name: "John",
    age: 20,
}

export type UserType = {
    name: string,
    age: number
    adress?: {title: string}
}

 function increaseAge(user:UserType) {
    user.age++;
}