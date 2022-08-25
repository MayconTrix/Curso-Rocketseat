/**
 * S => state
 * T => type
 * K => key
 * V => value
 * E =. element
 */


function useState<T extends number | string = string>(){ // padrão é string
    let state: T

    function get() {
        return state
    }

    function set(newValue: T) {
        state = newValue
    }

    return { get, set }
}

let newState = useState() // pode escolher useState<string>() || useState<number>()
newState.get()
newState.set('Maycon')
newState.set(123)
newState.set('Amanda')