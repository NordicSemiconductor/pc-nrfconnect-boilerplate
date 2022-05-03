/*
 * Copyright (c) 2015 Nordic Semiconductor ASA
 *
 * SPDX-License-Identifier: LicenseRef-Nordic-4-Clause
 */

import { connect } from 'react-redux';
import { DeviceSelector, logger } from 'pc-nrfconnect-shared';

/**
 * Configures which device types to show in the device selector.
 * The config format is described on
 * https://github.com/NordicSemiconductor/nrf-device-lister-js.
 */
const deviceListing = {
    nordicUsb: true,
    serialport: true,
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

const mapState = () => ({
    deviceListing,
    // deviceSetup,
});

/*
 * In these callbacks you may react on events when users (de)selected a device.
 * Leave out callbacks you do not need.
 *
 * Note that the callbacks releaseCurrentDevice and onDeviceIsReady
 * are only invoked, if a deviceSetup is defined.
 */
const mapDispatch = (/* dispatch */) => ({
    onDeviceSelected: device => {
        logger.info(`Selected device with s/n ${device.serialNumber}`);
    },
    // releaseCurrentDevice: () => {
    //     logger.info('Will set up selected device');
    // },
    // onDeviceIsReady: device => {
    //     logger.info(`Device with s/n ${device.serialNumber} was set up with a firmware`);
    // },
    onDeviceDeselected: () => {
        logger.info('Deselected device');
    },
});

export default connect(mapState, mapDispatch)(DeviceSelector);
