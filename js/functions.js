/*
// criar um aplicativo de frases motivacionais

// declaration - declaração da função
// function statment
function createPhrases() {
    console.log('Estudar é muito bom')
    console.log('Paciência e persistência')
    console.log('Revisão é a mãe do aprendizado')
}

// executar a função
// rodar, chamar, invocar
// execute, run, call, invoke

createPhrases()
createPhrases()
createPhrases()

console.log('fim do programa')
*/

/*
// function expression
// function anonymous
let total = 0

// parameters - parâmetros
// sum - soma
const sum = function(number1, number2) {
    let total = number1 + number2
    return total
}

let number1 = 34
let number2 = 25


console.log(`o número 1 é ${number1}`)
console.log(`o número 2 é ${number2}`)
console.log(`a soma é ${sum(number1, number2)}`)
console.log(total)

// sum(2, 3) // arguments - argumentos


// Função é um liquidificador

function fazerSuco(fruta1, fruta2) {
    return 'suco de ' + fruta1 + fruta2
}

const copo = fazerSuco('banana', 'maçã')

console.log(copo)
*/

// Function scope

/*
let subject = 'create video'

function createThink(subject) {
    subject = 'study'
    return subject
}

console.log(subject)
console.log(createThink(subject))
console.log(subject)
*/

/*
// function hoisting

sayMyName()

function sayMyName() {
    console.log('Maycon')
}
*/

/*
// arrow function

const sayMyName = (name) => {
    console.log(name)
}

sayMyName('Maycon')
*/

/*
// callback function

function sayMyName(name) {
    console.log('antes de executar a função callback')

    name()

    console.log('depois de executar a callback')
}

sayMyName( 
    () => {
        console.log('estou em uma callback')
    }
)
*/

/*
// Function() construtor
// * expressão new
// criar um novo objeto
// this keyword


function Person(name) {
    this.name = name
    this.walk = function () {
        return this.name + " está andando."
    }
}

const maycon = new Person('Maycon')
const mayk = new Person('Mayk')

console.log(maycon.walk())
console.log(mayk.walk())
*/