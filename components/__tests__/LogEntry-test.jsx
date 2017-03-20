import React from 'react';
import renderer from 'react-test-renderer';
import {
    decorateLogEntry,
} from '../LogEntry';

describe('LogEntry', () => {
    it('should implement component decorator', () => {
        expect(decorateLogEntry).toBeInstanceOf(Function);
    });
});

describe('decorateLogEntry', () => {
    it('should render component', () => {
        const LogEntry = decorateLogEntry('div');
        expect(renderer.create(
            <LogEntry />,
        )).toMatchSnapshot();
    });
});
