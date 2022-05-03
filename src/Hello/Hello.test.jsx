/*
 * Copyright (c) 2015 Nordic Semiconductor ASA
 *
 * SPDX-License-Identifier: LicenseRef-Nordic-4-Clause
 */

import React from 'react';
import renderer from 'react-test-renderer';

import Hello from './Hello';

describe('Hello', () => {
    it('has a reliable rendering', () => {
        expect(renderer.create(<Hello />)).toMatchSnapshot();
    });
});
