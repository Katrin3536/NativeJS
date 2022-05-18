export type UserType = {
    name: string,
    hair: number,
    adress: { title: string }
}

export type LaptopType = {
    title: string
}

export type UserWithLaptopType = UserType & {
    laptop: LaptopType
}

export type UserWithBooksType = UserType & {
    books: Array<string>
}

export type WithCompaniesType = UserType & {
    companies: Array<CompanyType>
}
export type CompanyType = { id: number, title: string }

export function makeHairStyle(u: UserType, power: number) {
    const copy = {
        ...u,
        hair: u.hair / power,
    };
    // copy.hair = u.hair/ power;
    return copy;
}

export function moveUser(u: UserWithLaptopType, title: string) {
    return {
        ...u,
        adress: {...u.adress, title: title}
    };
}

export function upgradeUserLaptop(u: UserWithLaptopType, title: string) {
    return {
        ...u,
        laptop: {...u.laptop, title: title}
    };
}

export function addNewBooksToUser(u: UserWithBooksType & UserWithLaptopType, books: Array<string>) {
    return {
        ...u,
        books: [...u.books, ...books]
    };
}

export function updateBooks(u: UserWithBooksType & UserWithLaptopType, currentBook: string, newBook: string) {
    return {
        ...u,
        books: u.books.map(el => el === currentBook ? newBook : el)
    };
}

export function removeBook(u: UserWithBooksType & UserWithLaptopType, book: string) {
    return {
        ...u,
        books: u.books.filter(el => el !== book)
    };
}


export function addCompany(u: WithCompaniesType & UserWithLaptopType, company: { id: number, title: string }) {
    return {
        ...u,
        companies: [...u.companies, company]
    };
}

export function updateCompanies(u: WithCompaniesType & UserWithLaptopType, id: number, title: string) {
    return {
        ...u,
        companies: u.companies.map(el => el.id === id ? {...el, title} : el)
    };
}

export function updateCompaniesTitle(companies: { [key: string]: Array<CompanyType> }, userName: string, companyId: number, title: string) {

    let companyCopy = {...companies};
    companyCopy[userName] = companyCopy[userName].map(el => el.id === companyId ? {...el, title} : el);
    return companyCopy;

}