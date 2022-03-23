type UserType = {
    [key: string]: { id: number, name: string }
}

let users: UserType;
beforeEach(() => {
    users =
        {
            '101': {id: 101, name: 'Katya'},
            '85': {id: 85, name: 'Masha'},
            '1008': {id: 1008, name: 'Sasha'},
            '6': {id: 7, name: 'Sergey'}
        };
});

test('Should select corresponding user from obj', () => {
    users['101'].name="Ekaterina"

    expect(users['101'].name).toBe("Ekaterina");
    expect(users['101']).toEqual({id: 101, name: 'Ekaterina'});

});

test('Should delete corresponding user from obj', () => {

    delete users['101']

    expect(users['101']).toBeUndefined();

});