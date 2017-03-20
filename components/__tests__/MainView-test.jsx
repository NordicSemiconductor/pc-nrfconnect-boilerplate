import React from 'react';
import renderer from 'react-test-renderer';
import {
    decorateMainView,
    mapMainViewDispatch,
    mapMainViewState,
} from '../MainView';

describe('MainView', () => {
    it('should implement component decorator', () => {
        expect(decorateMainView).toBeInstanceOf(Function);
    });
    it('should implement dispatch mapper', () => {
        expect(mapMainViewDispatch).toBeInstanceOf(Function);
    });
    it('should implement state mapper', () => {
        expect(mapMainViewState).toBeInstanceOf(Function);
    });
});

describe('decorateMainView', () => {
    it('should render component', () => {
        const MainView = decorateMainView('div');
        expect(renderer.create(
            <MainView />,
        )).toMatchSnapshot();
    });
});
