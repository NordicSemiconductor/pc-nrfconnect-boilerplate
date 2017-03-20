import React from 'react';
import renderer from 'react-test-renderer';
import {
    decorateSerialPortSelector,
    mapSerialPortSelectorDispatch,
    mapSerialPortSelectorState,
} from '../SerialPortSelector';

describe('SerialPortSelector', () => {
    it('should implement component decorator', () => {
        expect(decorateSerialPortSelector).toBeInstanceOf(Function);
    });
    it('should implement dispatch mapper', () => {
        expect(mapSerialPortSelectorDispatch).toBeInstanceOf(Function);
    });
    it('should implement state mapper', () => {
        expect(mapSerialPortSelectorState).toBeInstanceOf(Function);
    });
});

describe('decorateSerialPortSelector', () => {
    it('should render component', () => {
        const SerialPortSelector = decorateSerialPortSelector('div');
        expect(renderer.create(
            <SerialPortSelector />,
        )).toMatchSnapshot();
    });
});
