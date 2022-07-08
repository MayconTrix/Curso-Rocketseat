/*========================== Prototype ==========================*/

/*
    * prototype-based language
    * prototype chain
    * __proto__

'maycon'.__proto__
27.0.__proto__
['a', 'b'].__proto__
*/

/*
    Type conversion (typecasting) vs Type coersion (JS)
    * Alteração de um tipo de dado para outro tipo

console.log(Number('9') + 5) //Conversion (nós)
console.log('9' + 5) // Coersion (JS)
*/

/*====================== Strings e Números ======================*/

/*
// Manipulando Strings e Números

// Transformar String em Número em String
let string = "123"
console.log(Number(string))
let number = 321
console.log(String(number))
*/

/*
// Manipulando Strings e Números

// Contar quantos caracteres tem uma palavra e quatos dígitos tem um número

let word = "Paralelepipedo"
console.log(word.length)
let number = 1234
console.log(String(number).length)
*/

/*
// Manipulando Strings e Números

// Transformar um número quebrado com 2 casas decimais e trocar por vírgula

let number = 345.33452345
console.log(number.toFixed(2).replace(".", ","))
*/

/*
// Manipulando Strings e Números

// Transforme letras minúsculas em maiúsculas. Faça o contrário disso também


let word = "Programar é muito bacana!"
console.log(word.toLowerCase())
console.log(word.toUpperCase())
*/

/*
// Manipulando Strings e Números

// Separe um texto que contem espaços, em um novo array onde cada texto é
// uma posição do array. Depois disso, transforme o array em um texto e onde
// eram espaços, coloque _

let phrase = "Eu quero viver o Amor!"
let myArray = phrase.split(' ')
let phraseWithUnderscore = myArray.join('_')
console.log(phraseWithUnderscore)
*/

/*
// Manipulando Strings e Números

// Verificar se o texto contém a palavra Amor

let phrase = 'Eu quero viver o Amor'
console.log(phrase.includes('Amor'))
*/

/*
// Manipular Arrays

// Criar Array com construtor
let myArray = new Array('a', 'b', 'c')
console.log(myArray)
*/

/*
// Manipular Arrays

// Contar elementos de um array

console.log(['a', 'b', 'c'].length)
*/

/*
// Manipular Arrays

// Transformar uma cadeia de caracteres em elementos de um array

let word = 'manipulação'
console.log(Array.from(word))
*/

/*
// Manipular Arrays
let techs = ['html', 'css', 'js']
// adicionar um item no fim
techs.push('nodejs')
// adicionar no começo
techs.unshift("sql")
// remover do fim
// techs.pop()
// remover do começo
// techs.shift()
// pegar somente alguns elementos do array
// console.log(techs.slice(1, 3))
// remover 1 ou mais items em qualquer posição do array
// techs.splice(1,2)
// encontrar a posição de um elemento no array
let index = techs.indexOf('html')
techs.splice(index, 1)

console.log(techs)
*/


/*=================== Expressões e Operadores ===================*/

// Expressions //
// let number;
// let number = 1;

// (function () {
//     console.log('alo')
// })

// Operators //

// Unary //
// let number = 1
// console.log(typeof)
// console.log(number)

// ++ incremento
// -- decremento

// Binary //
// let number = 1
// console.log(number + 1)

// Ternary //
// let number = 1
// console.log(true ? 'alo' : 'nada')

// new //
// left-hand-side expression
// criar um novo objeto

// let name = new String('Maycon')
// name.surName = 'Batista'
// let age = new Number(27)
// console.log(name.surName, age)

// let date = new Date('2022-05-05')
// console.log(date.__proto__)

// Operadores unários //
// typeof //
// console.log(typeof)

// delete //
// const person = {
//     name: 'Maycon',
//     age: 27,
// }
// delete person.age
// console.log(person)

/*=================== Operadores Aritiméticos ===================*/


// multiplicação //
// console.log(3.2 * 5.5)

// divisão //
// console.log(12 / 2)

// soma //
// console.log( 34 + 67)

// subtração //
// console.log(34 - 23)

// resto da divisão //
// let remainder
// remainder = 11 % 9
// console.log(remainder)

// incremento //
// let increment = 0
// console.log(++increment)
// console.log(increment)

// decremento //
// let decrement = 0
// console.log(decrement--)
// console.log(decrement)

// exponencial ** //
// console.log(3 ** 2)

// Grouping operator ( ) //
// let total = 2 + 3 * 5
// console.log(total)
// let total1 = (2 + 3) * 5
// console.log(total1)

// Operadores de comparação //
// Irá comparar valores e retornar um Boolean como resposta à comparação
// let one = 1
// let two = 2

// == igual a //
// console.log(two == 1)
// console.log(one == "1")

// != diferente de //
// console.log(one != two)
// console.log(one != 1)
// console.log(one != "1")

// === estritamente igual a //
// console.log(one === "1")
// console.log(one === 1)

// !=== estritamente diferente de //
// console.log(two !== "2")
// console.log(two !== 2)

// > Maior que //
// console.log(one > two)

// >= Maior igual a //
// console.log(one >= 1)
// console.log(two >= 1)

// < Menor que //
// console.log(one < two)

// <= Menor igual a //
// console.log(one <= two)
// console.log(one <= 1)
// console.log(one <= 0)

// Operadores de atribuição (Assignment) //
// let x

// assignment

// addition assignment
// x = x + 2
// x += 2
// console.log(x)

//subtraction assignment
// x= x - 1
// x -= 1
// console.log(x)

// multiplication assignment
// x = x * 2
// x *= 2
// console.log(x)

// remainder, exponetiation
// x %= 2
// x **= 2
// console.log(x)

// Operadores lógicos (logical operators) //

// - 2 valores booleanos, quando verificados,
// resultará em verdadeiro ou falso

// let pao = true
// let queijo = true

// AND &&
// console.log(pao && queijo)

// OR ||
// console.log(pao || queijo)

// NOT !
// console.log(!pao)

// Operador Condicional (Ternário) //

// Dependendo da condição, nós receberemos valores diferentes //
// Condição então valor 1 se não valor 2 //
// condition ? value1 : value2 //

// Exemplos
// Café da manhã top
// let pao = true
// let queijo = true

// const niceBreakfast = pao && queijo ? 'Café Top' : 'Café ruim'
// console.log(niceBreakfast)

// Maior de 18

// let age = 20
// const canDrive = age >= 18 ? 'can drive' : "can't drive"
// console.log(canDrive)

// Operador de String (String operator) //
// comparison (comparação)
// console.log('a' == 'a')

//concatenation (concatenação)
// retornar a união de duas Strings
// let alpha = 'alpha'
// alpha += 'bet'
// console.log(alpha + 'bet' + 's')

// Type conversion (typecasting) vs Type coersion (JS) //
// FALSY //
// Quando um valor é considerado false em contextos onde um boolean é 
// obrigatório (condicinais e loops)
// false
// 0
// -0
// '' ""
// null
// undefined
// NaN

// console.log(false ? 'verdadeiro' : 'falso')

// TRUTHY //
// Quando um valor é considerado true em contextos onde um boolean é 
// obrigatório (condicinais e loops)
// true
// {}
// []
// 1
// 3.23
// "0"
// "false"
// -1
// infinity
// -infinity

// console.log(true ? 'verdadeiro' : 'falso')

// Operator precedence //
// Precedência de operadores
// grouping ( )
// negação e incremento/decremento ! ++ --
// multiplicação e divisão * /
// adição e subtração + -
// relacional < <= > >=
// igualdade == != === !===
// AND &&
// OR ||
// Condicional ? value1 : value2
// assignment (atribuição)

/*=============== Condicionais e controle de fluxo ==============*/

// if...else //

// let temperature = 36.9
// let highTemperature = temperature >= 37.5
// let mediumTemperature = temperature < 37.5 && temperature >= 37

// if(highTemperature){
//     console.log('Febre alta')
// } else if(mediumTemperature) {
//     console.log('Febre moderada')
// } else {
//     console.log('Sáudavel')
// }

// switch //

// function calculate(number1, operator,number2) {
//     let result = 0;

//     switch (operator) {
//         case '+':
//             result = number1 + number2
//             break
//         case '-':
//             result = number1 - number2
//             break
//         case '*':
//             result = number1 * number2
//             break
//         case '/':
//             result = number1 / number2
//             break
//         default:
//             console.log('não implementado')
//             break
//     }
//     return result
// }

// console.log(calculate(4, '*', 8))

// throw //

// function sayMyName(name = ''){
//     if(name === '') {
//         throw 'Nome é obrigatório'
//     }
//     console.log(name)
// }

// // try...catch //

// try{
//     sayMyName('Maycon')
// } catch(e) {
//     console.log(e)
// }

// console.log('após ao try/catch')

/*=================== Estruturas de repetição ===================*/

// Estrutura de repetição //
// for //

// for(let i = 1; i <= 10; i++) {
//     console.log(i)
// }

//  // continue - pula a execução do momento

// for(let i = 10; i > 0; i--) {
//     if(i === 5) {
//         continue;
//     }
//     console.log(i)
// }

// // break - para a execução do loop

// for(let i = 10; i > 0; i--) {
//     if(i === 5) {
//         break;
//     }
//     console.log(i)
// }

// Estrutura de repetição //
// while //
// Usar while quando não se sabe o momento da parada //

// let i = 49586394505;
// while(i > 10) {
//     console.log(i)

//     i /= 35
// }

// for...of //

// let name = 'Maycon'
// let names = ['joão', 'Paulo', 'Pedro']

// for(let name of names) {
//     console.log(name)
// }

// for...in //

// let person = {
//     name: 'John',
//     age: 30,
//     weight: 88.6
// }

// for(let property in person) {
//     console.log(property)
//     console.log(person[property]) // (person['name'])-(person.name)
// }