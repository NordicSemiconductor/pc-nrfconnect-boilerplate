import React from 'react';
import renderer from 'react-test-renderer';
import {
    decorateFirmwareDialog,
    mapFirmwareDialogDispatch,
    mapFirmwareDialogState,
} from '../FirmwareDialog';

describe('FirmwareDialog', () => {
    it('should implement component decorator', () => {
        expect(decorateFirmwareDialog).toBeInstanceOf(Function);
    });
    it('should implement dispatch mapper', () => {
        expect(mapFirmwareDialogDispatch).toBeInstanceOf(Function);
    });
    it('should implement state mapper', () => {
        expect(mapFirmwareDialogState).toBeInstanceOf(Function);
    });
});

describe('decorateFirmwareDialog', () => {
    it('should render component', () => {
        const FirmwareDialog = decorateFirmwareDialog('div');
        expect(renderer.create(
            <FirmwareDialog />,
        )).toMatchSnapshot();
    });
});
