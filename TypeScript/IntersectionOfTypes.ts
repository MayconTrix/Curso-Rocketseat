type User = {
    id: number,
    name: string
}

type Char = {
    nickname: string,
    level: number,           
}

type PlayerInfo = User & Char

let info: PlayerInfo = {
    id: 1,
    name: 'Maycon',
    nickname: 'TiuTrix',
    level: 99
}