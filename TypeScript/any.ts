let info: any // Cuidado com o uso de ANY! EVITE!

info = [1, 2, 3]
info = 'Maycon'
info = true
info = 10.50

// ==========================================================

function sum(a: any, b: any) {
    return a + b
}

sum(1, 3) // 4
sum('1', 3) // 13 concatenou