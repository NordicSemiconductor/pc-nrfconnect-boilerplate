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

import React from 'react';
import { logger } from 'nrfconnect/core';
import Hello from './components/Hello';
import './resources/css/index.less';

const logSelected = item => (
    () => (
        logger.info(`Selected ${item}`)
    )
);

/* eslint-disable react/prop-types */

/**
 * In this boilerplate app, we show a "dummy" implementation of all available
 * functions. By implementing one or more of the functions below, you can
 * add your own behavior.
 *
 * All of these functions are optional. You could just export an empty object
 * here if you want to start from scratch with the default behavior.
 */
export default {
    onInit: () => {
        logger.info('App initializing');
    },
    onReady: () => {
        logger.info('App initialized');
    },
    decorateFirmwareDialog: FirmwareDialog => (
        props => (
            <FirmwareDialog {...props} />
        )
    ),
    mapFirmwareDialogState: (state, props) => ({
        ...props,
    }),
    mapFirmwareDialogDispatch: (dispatch, props) => ({
        ...props,
    }),
    decorateLogEntry: LogEntry => (
        props => (
            <LogEntry {...props} />
        )
    ),
    decorateLogHeader: LogHeader => (
        props => (
            <LogHeader {...props} />
        )
    ),
    mapLogHeaderState: (state, props) => ({
        ...props,
    }),
    mapLogHeaderDispatch: (dispatch, props) => ({
        ...props,
    }),
    decorateLogHeaderButton: LogHeaderButton => (
        props => (
            <LogHeaderButton {...props} />
        )
    ),
    decorateLogViewer: LogViewer => (
        props => (
            <LogViewer {...props} />
        )
    ),
    mapLogViewerState: (state, props) => ({
        ...props,
    }),
    mapLogViewerDispatch: (dispatch, props) => ({
        ...props,
    }),
    decorateMainView: MainView => (
        props => {
            const { title } = props;
            return (
                <MainView {...props}>
                    <Hello title={title} />
                </MainView>
            );
        }
    ),
    mapMainViewState: (state, props) => ({
        ...props,
    }),
    mapMainViewDispatch: (dispatch, props) => ({
        ...props,
        title: 'Hello World!',
    }),
    decorateNavBar: NavBar => (
        props => (
            <NavBar {...props} />
        )
    ),
    decorateNavMenu: NavMenu => (
        props => (
            <NavMenu
                {...props}
                menuItems={[
                    { id: 'about', text: 'About', iconClass: 'icon-star' },
                ]}
            />
        )
    ),
    mapNavMenuState: (state, props) => ({
        ...props,
    }),
    mapNavMenuDispatch: (dispatch, props) => ({
        ...props,
        onItemSelected: item => dispatch(logSelected(item)),
    }),
    decorateNavMenuItem: NavMenuItem => (
        props => (
            <NavMenuItem {...props} />
        )
    ),
    decorateSerialPortSelector: SerialPortSelector => (
        props => (
            <SerialPortSelector {...props} />
        )
    ),
    mapSerialPortSelectorState: (state, props) => ({
        ...props,
    }),
    mapSerialPortSelectorDispatch: (dispatch, props) => ({
        ...props,
    }),
    decorateSerialPortSelectorItem: SerialPortSelectorItem => (
        props => (
            <SerialPortSelectorItem {...props} />
        )
    ),
    decorateSidePanel: SidePanel => (
        props => (
            <SidePanel {...props}>
                SidePanel content
            </SidePanel>
        )
    ),
    mapSidePanelState: (state, props) => ({
        ...props,
    }),
    mapSidePanelDispatch: (dispatch, props) => ({
        ...props,
    }),
    reduceFirmwareDialog: (state, action) => {
        switch (action.type) {
            case 'FIRMWARE_DIALOG_SHOW':
            case 'FIRMWARE_DIALOG_HIDE':
            case 'FIRMWARE_DIALOG_UPDATE_REQUESTED':
            case 'FIRMWARE_DIALOG_UPDATE_SUCCESS':
            case 'FIRMWARE_DIALOG_UPDATE_ERROR':
            default:
                return state;
        }
    },
    reduceLog: (state, action) => {
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
    },
    reduceNavMenu: (state, action) => {
        switch (action.type) {
            case 'NAV_MENU_ITEM_SELECTED':
            default:
                return state;
        }
    },
    reduceSerialPort: (state, action) => {
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
    },
    // Note: initial state of the application needs to be provided
    reduceApp: (state = {}, action) => {
        switch (action.type) {
            default:
                return state;
        }
    },
    middleware: store => next => action => { // eslint-disable-line
        next(action);
    },
};
