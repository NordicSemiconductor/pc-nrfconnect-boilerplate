/*
 * Copyright (c) 2015 Nordic Semiconductor ASA
 *
 * SPDX-License-Identifier: LicenseRef-Nordic-4-Clause
 */

import React, { useEffect } from 'react';
import { logger } from 'pc-nrfconnect-shared';
import { bool } from 'prop-types';

import './hello.scss';

const Hello = ({ active }) => {
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
Hello.propTypes = {
    active: bool,
};

export default Hello;
