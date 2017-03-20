import React from 'react';
import renderer from 'react-test-renderer';
import {
    decorateNavBar,
} from '../NavBar';

describe('NavBar', () => {
    it('should implement component decorator', () => {
        expect(decorateNavBar).toBeInstanceOf(Function);
    });
});

describe('decorateNavBar', () => {
    it('should render component', () => {
        const NavBar = decorateNavBar('div');
        expect(renderer.create(
            <NavBar />,
        )).toMatchSnapshot();
    });
});
