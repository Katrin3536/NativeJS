import {UserType} from './09_01mutability';

function increaseAge(u: UserType) {
    u.age++;
}

test('reference type test', () => {
    const user: UserType = {
        name: 'John',
        age: 20
    };

    increaseAge(user);

    expect(user.age).toBe(21);
    const superman = user;
    superman.age = 1000;
    expect(user.age).toBe(1000);
});

test('array type test', () => {
    const users = [{
        name: 'John',
        age: 20
    },
        {
            name: 'Igor',
            age: 30
        },
    ];

    const admins = users;
    admins.push({name: "Poll", age: 11})

    expect(users[2]).toEqual({name: "Poll", age: 11})

});

test('value type test', () => {
    const usersCount = 100;

    let adminsCount = usersCount;

    adminsCount= adminsCount+1;

    expect(usersCount).toBe(100)

});

test(' difficult case reference type test', () => {
    let user: UserType = {
        name: 'John',
        age: 20,
        adress: {
            title: 'Minsk'
        }
    };

    let user2: UserType = {
        name: 'John',
        age: 20,
        adress: user.adress
    };

    // user2.adress.title = "Larnaca"
    //
    // expect(user.adress.title).toBe("Larnaca");
});

test(' difficult case reference array type test', () => {
    let adress = {
        title: "Minsk"
    }

    let user: UserType = {
        name: 'John',
        age: 20,
        adress:adress
    };

    let user2: UserType = {
        name: 'John',
        age: 20,
        adress: adress
    };

    let users = [ user, user2, {name: "Sasha", age: 22, adress: adress}]

    const admins = [user, user2]

    admins[1].name="Dima"

    expect(user2.name).toBe("Dima");
    expect(users[1].name).toBe("Dima");
});

test('sort array test', ()=> {

    const letters = ['c', 'd', 'a', 'e', 'z']

    letters.sort();
    expect(letters).toEqual(['a', 'c', 'd', 'e', 'z'])
})