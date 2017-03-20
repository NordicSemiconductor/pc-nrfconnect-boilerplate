export default function reduceSerialPort(state, action) {
    switch (action.type) {
        case 'SERIAL_PORTS_LOAD':
        case 'SERIAL_PORTS_LOAD_SUCCESS':
        case 'SERIAL_PORTS_LOAD_ERROR':
        case 'SERIAL_PORT_SELECTOR_TOGGLE_EXPANDED':
        case 'SERIAL_PORT_SELECTED':
        case 'SERIAL_PORT_DESELECTED':
        default:
            return state;
    }
}
