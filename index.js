/* Copyright (c) 2015 - 2017, Nordic Semiconductor ASA
 *
 * All rights reserved.
 *
 * Use in source and binary forms, redistribution in binary form only, with
 * or without modification, are permitted provided that the following conditions
 * are met:
 *
 * 1. Redistributions in binary form, except as embedded into a Nordic
 *    Semiconductor ASA integrated circuit in a product or a software update for
 *    such product, must reproduce the above copyright notice, this list of
 *    conditions and the following disclaimer in the documentation and/or other
 *    materials provided with the distribution.
 *
 * 2. Neither the name of Nordic Semiconductor ASA nor the names of its
 *    contributors may be used to endorse or promote products derived from this
 *    software without specific prior written permission.
 *
 * 3. This software, with or without modification, must only be used with a Nordic
 *    Semiconductor ASA integrated circuit.
 *
 * 4. Any software provided in binary form under this license must not be reverse
 *    engineered, decompiled, modified and/or disassembled.
 *
 * THIS SOFTWARE IS PROVIDED BY NORDIC SEMICONDUCTOR ASA "AS IS" AND ANY EXPRESS OR
 * IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY, NONINFRINGEMENT, AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL NORDIC SEMICONDUCTOR ASA OR CONTRIBUTORS BE LIABLE
 * FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
 * DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
 * SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
 * CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR
 * TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF
 * THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

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
