/*
 * Copyright (c) 2015 Nordic Semiconductor ASA
 *
 * SPDX-License-Identifier: LicenseRef-Nordic-4-Clause
 */

import React from 'react';
import { App, render } from '@nordicsemiconductor/pc-nrfconnect-shared';

import BoilerplateDeviceSelector from './app/BoilerplateDeviceSelector';
import SidePanel from './app/SidePanel';
import Goodbye from './features/Hello/Goodbye';
import Hello from './features/Hello/Hello';

import './app/index.scss';

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

// Telemetry
// ===========================
// If you want to send telemetry data for this app to Nordic Semiconductor (if
// users agree to it), enable the following line . Please note: Even without
// this, some data about your app (e.g. that it was installed by someone) might
// be sent to Nordic Semiconductor if users agree to this. If you strictly want
// to prevent this, you need to create versions of pc-nrfconnect-shared and
// pc-nrfconnect-launcher which disables all telemetry, compile such a variant
// of the launcher and ship that to your users.
//
// telemetry.enableTelemetry();

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
