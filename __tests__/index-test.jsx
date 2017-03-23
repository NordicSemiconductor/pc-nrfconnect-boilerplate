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
import renderer from 'react-test-renderer';
import app from '../';

describe('app.FirmwareDialog', () => {
    it('should implement component decorator', () => {
        expect(app.decorateFirmwareDialog).toBeInstanceOf(Function);
    });
    it('should implement state mapper', () => {
        expect(app.mapFirmwareDialogState).toBeInstanceOf(Function);
    });
    it('should implement dispatch mapper', () => {
        expect(app.mapFirmwareDialogDispatch).toBeInstanceOf(Function);
    });
    it('should render component', () => {
        const FirmwareDialog = app.decorateFirmwareDialog('div');
        expect(renderer.create(
            <FirmwareDialog />,
        )).toMatchSnapshot();
    });
});

describe('app.LogEntry', () => {
    it('should implement component decorator', () => {
        expect(app.decorateLogEntry).toBeInstanceOf(Function);
    });
    it('should render component', () => {
        const LogEntry = app.decorateLogEntry('div');
        expect(renderer.create(
            <LogEntry />,
        )).toMatchSnapshot();
    });
});

describe('app.LogHeader', () => {
    it('should implement component decorator', () => {
        expect(app.decorateLogHeader).toBeInstanceOf(Function);
    });
    it('should implement state mapper', () => {
        expect(app.mapLogHeaderState).toBeInstanceOf(Function);
    });
    it('should implement dispatch mapper', () => {
        expect(app.mapLogHeaderDispatch).toBeInstanceOf(Function);
    });
    it('should render component', () => {
        const LogHeader = app.decorateLogHeader('div');
        expect(renderer.create(
            <LogHeader />,
        )).toMatchSnapshot();
    });
});

describe('app.LogHeaderButton', () => {
    it('should implement component decorator', () => {
        expect(app.decorateLogHeaderButton).toBeInstanceOf(Function);
    });
    it('should render component', () => {
        const LogHeaderButton = app.decorateLogHeaderButton('div');
        expect(renderer.create(
            <LogHeaderButton />,
        )).toMatchSnapshot();
    });
});

describe('app.LogViewer', () => {
    it('should implement component decorator', () => {
        expect(app.decorateLogViewer).toBeInstanceOf(Function);
    });
    it('should implement state mapper', () => {
        expect(app.mapLogViewerState).toBeInstanceOf(Function);
    });
    it('should implement dispatch mapper', () => {
        expect(app.mapLogViewerDispatch).toBeInstanceOf(Function);
    });
    it('should render component', () => {
        const LogViewer = app.decorateLogViewer('div');
        expect(renderer.create(
            <LogViewer />,
        )).toMatchSnapshot();
    });
});

describe('app.MainView', () => {
    it('should implement component decorator', () => {
        expect(app.decorateMainView).toBeInstanceOf(Function);
    });
    it('should implement state mapper', () => {
        expect(app.mapMainViewState).toBeInstanceOf(Function);
    });
    it('should implement dispatch mapper', () => {
        expect(app.mapMainViewDispatch).toBeInstanceOf(Function);
    });
    it('should render component', () => {
        const MainView = app.decorateMainView('div');
        expect(renderer.create(
            <MainView />,
        )).toMatchSnapshot();
    });
});

describe('app.NavBar', () => {
    it('should implement component decorator', () => {
        expect(app.decorateNavBar).toBeInstanceOf(Function);
    });
    it('should render component', () => {
        const NavBar = app.decorateNavMenuItem('div');
        expect(renderer.create(
            <NavBar />,
        )).toMatchSnapshot();
    });
});

describe('app.NavMenu', () => {
    it('should implement component decorator', () => {
        expect(app.decorateNavMenu).toBeInstanceOf(Function);
    });
    it('should implement state mapper', () => {
        expect(app.mapNavMenuState).toBeInstanceOf(Function);
    });
    it('should implement dispatch mapper', () => {
        expect(app.mapNavMenuDispatch).toBeInstanceOf(Function);
    });
    it('should render component', () => {
        const NavMenu = app.decorateNavMenu('div');
        expect(renderer.create(
            <NavMenu />,
        )).toMatchSnapshot();
    });
});

describe('app.NavMenuItem', () => {
    it('should implement component decorator', () => {
        expect(app.decorateNavMenuItem).toBeInstanceOf(Function);
    });
    it('should render component', () => {
        const NavMenuItem = app.decorateNavMenuItem('div');
        expect(renderer.create(
            <NavMenuItem />,
        )).toMatchSnapshot();
    });
});

describe('app.SerialPortSelector', () => {
    it('should implement component decorator', () => {
        expect(app.decorateSerialPortSelector).toBeInstanceOf(Function);
    });
    it('should implement state mapper', () => {
        expect(app.mapSerialPortSelectorState).toBeInstanceOf(Function);
    });
    it('should implement dispatch mapper', () => {
        expect(app.mapSerialPortSelectorDispatch).toBeInstanceOf(Function);
    });
    it('should render component', () => {
        const SerialPortSelector = app.decorateSerialPortSelector('div');
        expect(renderer.create(
            <SerialPortSelector />,
        )).toMatchSnapshot();
    });
});

describe('app.SerialPortSelectorItem', () => {
    it('should implement component decorator', () => {
        expect(app.decorateSerialPortSelectorItem).toBeInstanceOf(Function);
    });
    it('should render component', () => {
        const SerialPortSelectorItem = app.decorateSerialPortSelectorItem('div');
        expect(renderer.create(
            <SerialPortSelectorItem />,
        )).toMatchSnapshot();
    });
});

describe('app.SidePanel', () => {
    it('should implement component decorator', () => {
        expect(app.decorateSidePanel).toBeInstanceOf(Function);
    });
    it('should implement state mapper', () => {
        expect(app.mapSidePanelState).toBeInstanceOf(Function);
    });
    it('should implement dispatch mapper', () => {
        expect(app.mapSidePanelDispatch).toBeInstanceOf(Function);
    });
    it('should render component', () => {
        const SidePanel = app.decorateSidePanel('div');
        expect(renderer.create(
            <SidePanel />,
        )).toMatchSnapshot();
    });
});

describe('app.reducers', () => {
    it('should implement reduceApp', () => {
        expect(app.reduceApp).toBeInstanceOf(Function);
    });
    it('should implement reduceFirmwareDialog', () => {
        expect(app.reduceFirmwareDialog).toBeInstanceOf(Function);
    });
    it('should implement reduceLog', () => {
        expect(app.reduceLog).toBeInstanceOf(Function);
    });
    it('should implement reduceNavMenu', () => {
        expect(app.reduceNavMenu).toBeInstanceOf(Function);
    });
    it('should implement reduceSerialPort', () => {
        expect(app.reduceSerialPort).toBeInstanceOf(Function);
    });
});

describe('app.middleware', () => {
    it('should implement middleware', () => {
        expect(app.middleware).toBeInstanceOf(Function);
    });
});

describe('app.config', () => {
    it('should have configuration', () => {
        expect(app.config).toBeInstanceOf(Object);
    });
});
