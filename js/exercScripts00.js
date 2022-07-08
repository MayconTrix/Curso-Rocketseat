//  1. Declare uma variável de nome weight
//   R: let weight

//  2. Que tipo de dado é a variável acima?
//  R: Undefined
// console.log(typeof weight)


//  3. Declare uma variável e atribua valores para cada 
// um dos dados:
//         * name: String
//         * age: Number (integer)
//         * stars: Number (float)
//         * isSubscribed: Boolean


//R:
// let name = "Maycon"
// let age = 27
// let stars = 4.9
// let isSubscribed = false

//  4. A variável student abaixo é de que tipo de dado?
//  
//  4.1 Atribua a ela as mesmas propriedades e valores do exercício 3.
//
//  4.2 mostre no console a seguinte mensagem:
//          <name> de idade <age> pesa <weight> kg.

// let student = {}; // 4.R: Object
//  4.1-R:

// let student = {
//     name: 'Maycon',
//     age: 27,
//     weight: 65.5,
//     stars: 4.9,
//     isSubscribed: false,
// }

//  4.2-R:
//  console.log(`${student.name} de idade ${student.age} pesa ${student.weight}kg.`)



//  5. Declare uma variável do tipo Array, de nome students e atribua a ela 
//  nenhum valor, ou seja, somente o Array vazio
//  R:

// let students = []

//  6. Reatribua o valor para a variável acima, colocando dentro dela o objeto
//  student da questão 4. (não copiar e colar o objeto, mas usar o objeto criado
//  e inserir ele no Array)
//  R:

// students = [student]

// console.log(students)

//  7. Coloque no console o valor da posição zero do Array acima.
//  R:

// console.log(students[0])

//  8. Crie um novo student e coloque na posição 1 do Array students
//  R:

// let maria = {
//     name: 'Maria',
//     age: 23,
//     weight: 55.5,
//     stars: 4.7,
//     isSubscribed: true,
// }

// let students = [student, maria]

// console.log(students[1])

//  9. Sem rodar o código responda qual é a resposta do código abaixo e por que?
//  Após sua resposta, rode o código e veja se você acertou.
// R: Undefined, Por que a variável não foi definida antes do console.

console.log(a)
var a = 1