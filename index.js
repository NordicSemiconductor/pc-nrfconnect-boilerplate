import {
    decorateFirmwareDialog,
    mapFirmwareDialogDispatch,
    mapFirmwareDialogState,
} from './components/FirmwareDialog';
import { decorateLogEntry } from './components/LogEntry';
import {
    decorateLogHeader,
    mapLogHeaderDispatch,
    mapLogHeaderState,
} from './components/LogHeader';
import { decorateLogHeaderButton } from './components/LogHeaderButton';
import {
    decorateLogViewer,
    mapLogViewerDispatch,
    mapLogViewerState,
} from './components/LogViewer';
import {
    decorateMainView,
    mapMainViewDispatch,
    mapMainViewState,
} from './components/MainView';
import { decorateNavBar } from './components/NavBar';
import {
    decorateNavMenu,
    mapNavMenuDispatch,
    mapNavMenuState,
} from './components/NavMenu';
import { decorateNavMenuItem } from './components/NavMenuItem';
import {
    decorateSerialPortSelector,
    mapSerialPortSelectorDispatch,
    mapSerialPortSelectorState,
} from './components/SerialPortSelector';
import { decorateSerialPortSelectorItem } from './components/SerialPortSelectorItem';
import {
    decorateSidePanel,
    mapSidePanelDispatch,
    mapSidePanelState,
} from './components/SidePanel';
import reduceFirmwareDialog from './reducers/FirmwareDialog';
import reduceLog from './reducers/Log';
import reduceNavMenu from './reducers/NavMenu';
import reduceSerialPort from './reducers/SerialPort';
import reducePlugin from './reducers/Plugin';

import './resources/css/index.less';

const config = {
    firmwareData: {
        nrf51: '',
        nrf52: '',
    },
    firmwarePaths: {
        nrf51: '',
        nrf52: '',
    },
};

export default {
    decorateFirmwareDialog,
    decorateLogEntry,
    decorateLogHeader,
    decorateLogHeaderButton,
    decorateLogViewer,
    decorateMainView,
    decorateNavBar,
    decorateNavMenu,
    decorateNavMenuItem,
    decorateSerialPortSelector,
    decorateSerialPortSelectorItem,
    decorateSidePanel,
    mapFirmwareDialogDispatch,
    mapLogHeaderDispatch,
    mapLogViewerDispatch,
    mapMainViewDispatch,
    mapNavMenuDispatch,
    mapSerialPortSelectorDispatch,
    mapSidePanelDispatch,
    mapFirmwareDialogState,
    mapLogHeaderState,
    mapLogViewerState,
    mapMainViewState,
    mapNavMenuState,
    mapSerialPortSelectorState,
    mapSidePanelState,
    reduceFirmwareDialog,
    reduceLog,
    reduceNavMenu,
    reduceSerialPort,
    reducePlugin,
    config,
};
