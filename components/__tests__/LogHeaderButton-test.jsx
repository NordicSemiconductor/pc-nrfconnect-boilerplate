import React from 'react';
import renderer from 'react-test-renderer';
import {
    decorateLogHeaderButton,
} from '../LogHeaderButton';

describe('LogHeaderButton', () => {
    it('should implement component decorator', () => {
        expect(decorateLogHeaderButton).toBeInstanceOf(Function);
    });
});

describe('decorateLogHeaderButton', () => {
    it('should render component', () => {
        const LogHeaderButton = decorateLogHeaderButton('div');
        expect(renderer.create(
            <LogHeaderButton />,
        )).toMatchSnapshot();
    });
});
