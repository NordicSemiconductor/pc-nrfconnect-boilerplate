/*
 * Copyright (c) 2015 Nordic Semiconductor ASA
 *
 * SPDX-License-Identifier: LicenseRef-Nordic-4-Clause
 */

import React, { useEffect } from 'react';
import { logger } from '@nordicsemiconductor/pc-nrfconnect-shared';

import './hello.scss';

const Hello: React.FC<{ active: boolean }> = ({ active }) => {
    useEffect(() => {
        if (active) {
            logger.info('Showing Hello pane');
        }
        return () => {
            if (active) {
                logger.info('Hiding Hello pane');
            }
        };
    }, [active]);

    return <h3 className="title">Hello World</h3>;
};

export default Hello;
