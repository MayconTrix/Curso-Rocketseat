// Promessa retorna com sucesso

console.log('Pedir Uber')
const promessa = new Promise((resolve, reject) => {
    return resolve('Carro chegou')
})

console.log('Aguardando')

promessa.then(result => console.log(result))

// Promessa é rejeitada e usamos o catch() para capturar o erro
console.log('Pedir Uber')
const promessa1 = new Promise((resolve, reject) => {
    return reject('Pedido negado!')
})

console.log('aguardando')

promessa1
    .then(result => console.log(result))
    .catch(erro => console.log(erro))

let aceitar = true

console.log('Pedir Uber')

const promessa2 = new Promise((resolve, reject) => {
    if(aceitar) {
        return resolve('Pedido aceito!')
    }
    return reject('Pedido negado!')
})

console.log('Aguardando')

promessa2
    .then(result => console.log(result))
    .catch(erro => console.log(erro))
    .finally(() => console.log('finalizada'))