export default function reduceFirmwareDialog(state, action) {
    switch (action.type) {
        case 'FIRMWARE_DIALOG_SHOW':
        case 'FIRMWARE_DIALOG_HIDE':
        case 'FIRMWARE_DIALOG_UPDATE_REQUESTED':
        case 'FIRMWARE_DIALOG_UPDATE_SUCCESS':
        case 'FIRMWARE_DIALOG_UPDATE_ERROR':
        default:
            return state;
    }
}
