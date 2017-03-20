export default function reduceLog(state, action) {
    switch (action.type) {
        case 'LOG_ADD_ENTRIES':
        case 'LOG_OPEN_FILE':
        case 'LOG_OPEN_FILE_SUCCESS':
        case 'LOG_OPEN_FILE_ERROR':
        case 'LOG_CLEAR_ENTRIES':
        case 'LOG_TOGGLE_AUTOSCROLL':
        default:
            return state;
    }
}
