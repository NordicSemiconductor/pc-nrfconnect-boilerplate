import React from 'react';
import renderer from 'react-test-renderer';
import {
    decorateSidePanel,
    mapSidePanelDispatch,
    mapSidePanelState,
} from '../SidePanel';

describe('SidePanel', () => {
    it('should implement component decorator', () => {
        expect(decorateSidePanel).toBeInstanceOf(Function);
    });
    it('should implement dispatch mapper', () => {
        expect(mapSidePanelDispatch).toBeInstanceOf(Function);
    });
    it('should implement state mapper', () => {
        expect(mapSidePanelState).toBeInstanceOf(Function);
    });
});

describe('decorateSidePanel', () => {
    it('should render component', () => {
        const SidePanel = decorateSidePanel('div');
        expect(renderer.create(
            <SidePanel />,
        )).toMatchSnapshot();
    });
});
