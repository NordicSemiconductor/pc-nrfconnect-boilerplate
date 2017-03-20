import React from 'react';
import renderer from 'react-test-renderer';
import {
    decorateNavMenuItem,
} from '../NavMenuItem';

describe('NavMenuItem', () => {
    it('should implement component decorator', () => {
        expect(decorateNavMenuItem).toBeInstanceOf(Function);
    });
});

describe('decorateNavMenuItem', () => {
    it('should render component', () => {
        const NavMenuItem = decorateNavMenuItem('div');
        expect(renderer.create(
            <NavMenuItem />,
        )).toMatchSnapshot();
    });
});
