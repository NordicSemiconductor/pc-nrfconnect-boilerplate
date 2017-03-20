import React from 'react';
import renderer from 'react-test-renderer';
import {
    decorateLogViewer,
    mapLogViewerDispatch,
    mapLogViewerState,
} from '../LogViewer';

describe('LogViewer', () => {
    it('should implement component decorator', () => {
        expect(decorateLogViewer).toBeInstanceOf(Function);
    });
    it('should implement dispatch mapper', () => {
        expect(mapLogViewerDispatch).toBeInstanceOf(Function);
    });
    it('should implement state mapper', () => {
        expect(mapLogViewerState).toBeInstanceOf(Function);
    });
});

describe('decorateLogViewer', () => {
    it('should render component', () => {
        const LogViewer = decorateLogViewer('div');
        expect(renderer.create(
            <LogViewer />,
        )).toMatchSnapshot();
    });
});
