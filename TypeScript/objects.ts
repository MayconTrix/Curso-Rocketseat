type Point = {
    x: number
    y: number
}

function printCoord(points: Point) {
    console.log(`O eixo x é: ${points.x}`)
    console.log(`O eixo y é: ${points.y}`)
}

printCoord({x: 101, y: 50})

// ==========================================================

type User = {
    name: string,
    email: string,
    age: number,
    isAdmin: boolean,
}

const newUser: User
newUser.