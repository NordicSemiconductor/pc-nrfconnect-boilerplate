/*
 * Copyright (c) 2015 Nordic Semiconductor ASA
 *
 * SPDX-License-Identifier: LicenseRef-Nordic-4-Clause
 */

import React from 'react';
import {
    Device,
    DeviceSelector,
    logger,
} from '@nordicsemiconductor/pc-nrfconnect-shared';
import { DeviceTraits } from '@nordicsemiconductor/pc-nrfconnect-shared/typings/generated/nrfutil';

/**
 * Configures which device types to show in the device selector.
 * The config format is described on
 * https://github.com/NordicSemiconductor/nrf-device-lister-js.
 */
const deviceListing: DeviceTraits = {
    nordicUsb: true,
    serialPorts: true,
    jlink: true,
};

/**
 * Configures how devices should be set up (programmed) when selected.
 * The config format is described on
 * https://github.com/NordicSemiconductor/nrf-device-setup-js.
 *
 * Currently no setup is done. If you need one, set deviceSetup appropriately
 * and add it in mapState below.
 *
 * To refer to files provided by your app, use getAppFile exported by
 * pc-nrfconnect-shared
 */
// const deviceSetup = {
// dfu: {},
// jprog: {},
// };

/*
 * In these callbacks you may react on events when users (de)selected a device.
 * Leave out callbacks you do not need.
 *
 * Note that the callbacks releaseCurrentDevice and onDeviceIsReady
 * are only invoked, if a deviceSetup is defined.
 */
const onDeviceSelected = (device: Device) => {
    logger.info(`Selected device with s/n ${device.serialNumber}`);
};
// const releaseCurrentDevice = () => {
//     logger.info('Will set up selected device');
// };
// const onDeviceIsReady = (device: Device) => {
//     logger.info(
//         `Device with s/n ${device.serialNumber} was set up with a firmware`
//     );
// };
const onDeviceDeselected = () => {
    logger.info('Deselected device');
};

export default () => (
    <DeviceSelector
        deviceListing={deviceListing}
        // deviceSetup={deviceSetup}
        onDeviceSelected={onDeviceSelected}
        // releaseCurrentDevice={releaseCurrentDevice}
        // onDeviceIsReady={onDeviceIsReady}
        onDeviceDeselected={onDeviceDeselected}
    />
);
