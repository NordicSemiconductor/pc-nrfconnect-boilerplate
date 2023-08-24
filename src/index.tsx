/*
 * Copyright (c) 2015 Nordic Semiconductor ASA
 *
 * SPDX-License-Identifier: LicenseRef-Nordic-4-Clause
 */

import React from 'react';
import { App, render } from '@nordicsemiconductor/pc-nrfconnect-shared';

import BoilerplateDeviceSelector from './BoilerplateDeviceSelector';
import Goodbye from './Hello/Goodbye';
import Hello from './Hello/Hello';
import SidePanel from './SidePanel';

import './index.scss';

// If your app uses redux, then specify your root reducer here.
// It will handle the slice of state under the name `app`.
const reducer = undefined;

// nRF Connect boilerplate app
// ===========================
//
// In this boilerplate app, we show a dummy implementation of an nRF Connect
// for Desktop app. We try to show every function but either only provide the
// simplest implementation we could think of or just have a commented out
// implementation to hint at what might be used. Adapt everything to make it
// fit for you and remove what is not needed.

render(
    <App
        appReducer={reducer}
        deviceSelect={<BoilerplateDeviceSelector />}
        sidePanel={<SidePanel />}
        panes={[
            { name: 'Hello', Main: Hello },
            { name: 'Goodbye', Main: Goodbye },
        ]}
    />
);
