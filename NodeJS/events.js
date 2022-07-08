const {EventEmitter} = require('events')
const ev = new EventEmitter()

ev.on('saySomething', (message) => { //ev.once ouve uma unica vez
    console.log('Eu ouvi você!', message)
})

ev.emit('saySomething', "Maycon")