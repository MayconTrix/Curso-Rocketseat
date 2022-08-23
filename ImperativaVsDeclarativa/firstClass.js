// First-Class function

const sayMyName = () => console.log('Maycon')
const runFunction = fn => fn()

runFunction(sayMyName)
runFunction(() => console.log('discover'))

console.log(runFunction(Math.random))