/* ### Transformar notas escolares

Crie um algoritmo que transforme as notas do sistema
numérico para sistema de notas em caracteres tipo A B C

* de 90 para cima = A
* entre 80 - 89   = B
* entre 70 - 79   = C
* entre 60 - 69   = D
* menor que 60    = F
*/

// Resposta:

// let noteStudent = 98
// let noteA = noteStudent >= 90
// let noteB = noteStudent <= 89 && noteStudent >= 80
// let noteC = noteStudent <= 79 && noteStudent >= 70
// let noteD = noteStudent <= 69 && noteStudent >= 60
// let noteF = noteStudent <= 59


// if(noteA) {
//     console.log('Note: A.')
// } else if(noteB) {
//     console.log('Note: B.')
// } else if(noteC) {
//     console.log('Note: C.')
// } else if(noteD) {
//     console.log('Note: D.')
// } else if(noteF) {
//     console.log('Note: F.')
// }


// // Professor: 

// function getScore(score) {
//     let scoreA = score <= 100 && score >= 90
//     let scoreB = score <= 89 && score >= 80
//     let scoreC = score <= 79 && score >= 70
//     let scoreD = score <= 69 && score >= 60
//     let scoreF = score <= 59 && score >= 0


// if(scoreA) {
//     scoreFinal = 'A'
// } else if(scoreB) {
//     scoreFinal = 'B'
// } else if(scoreC) {
//     scoreFinal = 'C'
// } else if(scoreD) {
//     scoreFinal = 'D'
// } else if(scoreF) {
//     scoreFinal = 'F'
// } else {
//     scoreFinal = 'Nota inválida'
// }
//     return scoreFinal
// }

// console.log(getScore(101))
// console.log(getScore(-1))
// console.log(getScore(0))
// console.log(getScore(1))
// console.log(getScore(45))
// console.log(getScore(60))
// console.log(getScore(75))
// console.log(getScore(85))
// console.log(getScore(95))

/* ### Sistema de gastos familiar

Crie um objeto que possuirá 2 propriedade, antes do tipo
array:
    * receitas(incomes): []
    * despesas(expenses): []

Agora, crie uma função que irá calcular o total de receitas
e despesas e irá mostrar uma mensagem se a família está com
saldo positivo ou negativo, seguido do valor do saldo.
*/

// Resposta:

// let family = {
//     incomes: [2500.00, 2500.00],
//     expenses: [352.32, 130.29, 308.50, 119.90, 1640.00]
// }

// function sum(array) {
//     let total = 0;

//     for(let value of array) {
//         total += value
//     }
//     return total
// }

// function calculateBalance() {
//     const calculateIncomes = sum(family.incomes)
//     const calculateExpenses = sum(family.expenses)

//     const total = calculateIncomes - calculateExpenses

//     const itsOk = total >= 0

//     let balanceText = 'Negativo'

//     if (itsOk){
//         balanceText = 'Positivo'
//     }
//     console.log(`Seu saldo é ${balanceText}: R$ ${total.toFixed(2).replace('.',',')}`)
// }

// calculateBalance()


/* ### Celsius em fahrenheit

Crie uma função que receba uma string em celsius ou fahrenheit
e faça a transformação de uma unidade para outra

C = (F - 32) * 5/9
F = C * 9/5 + 32
*/

// Resposta:

// transformDegree('50F')
// function transformDegree(degree) {
//     const celsiusExists = degree.toUpperCase().includes('C')
//     const fahrenheitExists = degree.toUpperCase().includes('F')

//     // fluxo de erro
//     if(!celsiusExists && !fahrenheitExists) {
//         throw new Error('Grau não identificado')
//     }

//     //fluxo ideal, F -> C
//     let updatedDegree = Number(degree.toUpperCase().replace('F', ''));
//     let formula = fahrenheit => (fahrenheit - 32) * 5/9
//     let degreeSign = 'C'

//     //fluxo alternativo C -> F
//     if(celsiusExists) {
//         updatedDegree = Number(degree.toUpperCase().replace('C', ''));
//         formula = celsius => celsius * 9/5 + 32
//         degreeSign = 'F'
//     }
//     return formula(updatedDegree) + degreeSign
// }

// try {
//     console.log(transformDegree('10C'))
//     console.log(transformDegree('50F'))
//     transformDegree('50Z')
// } catch (error) {
//     console.log(error.message)
// }

/* ### Buscando e contando dados em Arrays

Baseado no Array de Livros por Categoria abaixo, faça os seguintes desafios
    * Contar o número de categorias e o número de livros em cada categoria
    * Contar o número de autores
    * Mostrar livros do autor Augusto Cury
    * Transformar a função acima em uma função que irá receber o nome do autor
    e devolver os livros dessse autor.
*/

const booksByCategory = [
{
    category: 'Riqueza',
    books: [
        {
            title: 'Os segredos da mente milionária',
            author: 'T. Harv Eker',
        },
        {
            title: 'O homen mais rico da Babilônia',
            author: 'George S. Clason',
        },
        {
            title: 'Pai rico, pai pobre',
            author: 'Robert T. Kiyosaki e Sharon L. Lechter'
        },
    ],
},
{
    category: 'Inteligência Emocional',
    books: [
        {
            title: 'Você é Insubstituível',
            author: 'Augusto Cury',
        },
        {
            title: 'Ansiedade - Como enfrentar o mal do século',
            author: 'Augusto Cury',
        },
        {
            title: 'Os 7 hábitos das pessoas altamente eficazes',
            author: 'Stephen R. Covey',
        },
    ],
},
];

const totalCategories = booksByCategory.length
    console.log(totalCategories);

for(let category of booksByCategory) {
    console.log('Totalde livros da categoria', category.category)
    console.log(category.books.length)
}

function countAuthors() {
    let authors = [];

    for(let category of booksByCategory) {
        for(let book of category.books) {
            if(authors.indexOf(book.author) == -1) {
                authors.push(book.author)
            }
        }
    }
    console.log('Total de autores: ', authors.length) 
}

countAuthors();

function booksOfAuthor(author) {
    let books = [];

    for(let category of booksByCategory) {
        for(let book of category.books) {
            if(book.author === author) {
                books.push(book.title)
            }
        }
    }
    console.log(`Livros do autor ${author}: ${books.join(', ')}`) 
}

booksOfAuthor('Augusto Cury');