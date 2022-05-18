import {
    addCompany,
    addNewBooksToUser,
    makeHairStyle,
    moveUser,
    removeBook,
    updateBooks,
    updateCompanies,
    updateCompaniesTitle,
    upgradeUserLaptop,
    UserType,
    UserWithBooksType,
    UserWithLaptopType, WithCompaniesType
} from './10_01';

test('reference type test', () => {
    let user: UserType = {
        name: 'Dimych',
        hair: 32,
        adress: {title: 'Minsk'}
    };
    const aweSomeUser = makeHairStyle(user, 2);

    expect(aweSomeUser.hair).toBe(16);
    expect(user.hair).toBe(32);
    expect(aweSomeUser.adress).toBe(user.adress);

});

test('change adress', () => {
    let user: UserWithLaptopType = {
        name: 'Dimych',
        hair: 32,
        adress: {title: 'Minsk'},
        laptop: {title: 'ZenBook'}
    };
    let movedUser = moveUser(user, 'Kiev');

    expect(user).not.toBe(movedUser);
    expect(user.adress).not.toBe(movedUser.adress);
    expect(movedUser.laptop).toBe(user.laptop);
    expect(movedUser.adress.title).toBe('Kiev');

});

test('upgrade laptop to macbook', () => {
    let user: UserWithLaptopType = {
        name: 'Dimych',
        hair: 32,
        adress: {title: 'Minsk'},
        laptop: {title: 'ZenBook'}
    };
    let userCopy = upgradeUserLaptop(user, 'Macbook');

    expect(user).not.toBe(userCopy);
    expect(user.laptop).not.toBe(userCopy.laptop);
    expect(userCopy.adress).toBe(user.adress);
    expect(userCopy.laptop.title).toBe('Macbook');
    expect(user.laptop.title).toBe('ZenBook');

});

test('add new books to user', () => {
    let user: UserWithBooksType & UserWithLaptopType = {
        name: 'Dimych',
        hair: 32,
        adress: {title: 'Minsk'},
        laptop: {title: 'ZenBook'},
        books: ['css', 'js', 'html', 'react']
    };
    let userCopy = addNewBooksToUser(user, ['ts', 'rest api']);

    expect(user).not.toBe(userCopy);
    expect(user.laptop).toBe(userCopy.laptop);
    expect(userCopy.adress).toBe(user.adress);
    expect(userCopy.books).not.toBe(user.books);
    expect(userCopy.books[4]).toBe('ts');
    expect(userCopy.books.length).toBe(6);
    expect(user.books.length).toBe(4);

});

test('update js to ts', () => {
    let user: UserWithBooksType & UserWithLaptopType = {
        name: 'Dimych',
        hair: 32,
        adress: {title: 'Minsk'},
        laptop: {title: 'ZenBook'},
        books: ['css', 'js', 'html', 'react']
    };
    let userCopy = updateBooks(user, 'js', 'ts');

    expect(user).not.toBe(userCopy);
    expect(user.laptop).toBe(userCopy.laptop);
    expect(userCopy.adress).toBe(user.adress);
    expect(userCopy.books).not.toBe(user.books);
    expect(userCopy.books[1]).toBe('ts');
    expect(userCopy.books.length).toBe(4);
    expect(user.books.length).toBe(4);

});

test('remove book js', () => {
    let user: UserWithBooksType & UserWithLaptopType = {
        name: 'Dimych',
        hair: 32,
        adress: {title: 'Minsk'},
        laptop: {title: 'ZenBook'},
        books: ['css', 'js', 'html', 'react']
    };
    let userCopy = removeBook(user, 'js');

    expect(user).not.toBe(userCopy);
    expect(user.laptop).toBe(userCopy.laptop);
    expect(userCopy.adress).toBe(user.adress);
    expect(userCopy.books).not.toBe(user.books);
    expect(userCopy.books.length).toBe(3);
    expect(user.books.length).toBe(4);

});

test('companies', () => {
    let user: WithCompaniesType & UserWithLaptopType = {
        name: 'Dimych',
        hair: 32,
        adress: {title: 'Minsk'},
        laptop: {title: 'ZenBook'},
        companies: [{id: 1, title: 'Epam'}, {id: 2, title: 'It-incubator'}]
    };
    let userCopy = addCompany(user, {id: 3, title: 'Facebook'});

    expect(user).not.toBe(userCopy);
    expect(user.laptop).toBe(userCopy.laptop);
    expect(userCopy.adress).toBe(user.adress);
    expect(userCopy.companies).not.toBe(user.companies);
    expect(userCopy.companies.length).toBe(3);
    expect(userCopy.companies[2]).toEqual({id: 3, title: 'Facebook'});


});

test('update companies', () => {
    let user: WithCompaniesType & UserWithLaptopType = {
        name: 'Dimych',
        hair: 32,
        adress: {title: 'Minsk'},
        laptop: {title: 'ZenBook'},
        companies: [{id: 1, title: 'Epam'}, {id: 2, title: 'It-incubator'}]
    };
    let userCopy = updateCompanies(user, 1, 'EPAM');

    expect(user).not.toBe(userCopy);
    expect(user.laptop).toBe(userCopy.laptop);
    expect(userCopy.adress).toBe(user.adress);
    expect(userCopy.companies).not.toBe(user.companies);
    expect(userCopy.companies[0].title).toBe('EPAM');

});


test('update newcCompanies', () => {
    let companies = {
        'Dimich': [{id: 1, title: 'Epam'}, {id: 2, title: 'It-incubator'}],
        'Igor': [{id: 1, title: 'Epam'}]
    };
    let userCopy = updateCompaniesTitle(companies, 'Dimich', 1, 'EPAM');

    expect(companies['Dimich']).not.toBe(userCopy['Dimich']);
    expect(companies['Igor']).toBe(userCopy['Igor']);
    expect(userCopy['Dimich'][0].title).toBe('EPAM');

});