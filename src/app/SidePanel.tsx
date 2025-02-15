/*
 * Copyright (c) 2015 Nordic Semiconductor ASA
 *
 * SPDX-License-Identifier: LicenseRef-Nordic-4-Clause
 */

import React from 'react';
import { Group, SidePanel } from '@nordicsemiconductor/pc-nrfconnect-shared';

export default () => (
    <SidePanel>
        <Group heading="Info">
            The side panel can be used for configurations or information that
            are always shown to the side of the main view.
        </Group>
    </SidePanel>
);
