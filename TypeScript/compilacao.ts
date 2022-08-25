// TypeScript
function showTicket(user: string | null, ticket: number) {
    console.log(`Olá ${user ?? 'Usuário'}. Seu número de bilhete é ${ticket}.`)
}

showTicket('Maycon', 12345678)

// JavaScript

// function showTicket(user, ticket) {
//     console.log(`Olá ${user !== null && user !== void 0 ? user : 'Usuário'}. Seu número de bilhete é ${ticket}.`);
// }
// showTicket('Maycon', 12345678);