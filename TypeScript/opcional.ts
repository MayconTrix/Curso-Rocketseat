type User = {
    name: string,
    email: string,
    age: number,
    isAdmin?: boolean, // Colocar como opcional usando ?
}

let newUser: User = {
    name: 'Maycon',
    email: 'maycon@email.com',
    age: 28
}