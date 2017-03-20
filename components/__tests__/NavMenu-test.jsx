import React from 'react';
import renderer from 'react-test-renderer';
import {
    decorateNavMenu,
    mapNavMenuDispatch,
    mapNavMenuState,
} from '../NavMenu';

describe('NavMenu', () => {
    it('should implement component decorator', () => {
        expect(decorateNavMenu).toBeInstanceOf(Function);
    });
    it('should implement dispatch mapper', () => {
        expect(mapNavMenuDispatch).toBeInstanceOf(Function);
    });
    it('should implement state mapper', () => {
        expect(mapNavMenuState).toBeInstanceOf(Function);
    });
});

describe('decorateNavMenu', () => {
    it('should render component', () => {
        const NavMenu = decorateNavMenu('div');
        expect(renderer.create(
            <NavMenu />,
        )).toMatchSnapshot();
    });
});
