import React from 'react';
import renderer from 'react-test-renderer';
import {
    decorateSerialPortSelectorItem,
} from '../SerialPortSelectorItem';

describe('SerialPortSelectorItem', () => {
    it('should implement component decorator', () => {
        expect(decorateSerialPortSelectorItem).toBeInstanceOf(Function);
    });
});

describe('decorateSerialPortSelectorItem', () => {
    it('should render component', () => {
        const SerialPortSelectorItem = decorateSerialPortSelectorItem('div');
        expect(renderer.create(
            <SerialPortSelectorItem />,
        )).toMatchSnapshot();
    });
});
