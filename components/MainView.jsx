/* eslint react/prop-types: 0 */

import React from 'react';

export default {
    mapMainViewState: (state, props) => ({
        ...props,
    }),
    mapMainViewDispatch: (dispatch, props) => ({
        ...props,
        title: 'Hello World!',
    }),
    decorateMainView: MainView => (
        props => {
            const { title } = props;
            return (
                <MainView {...props}>
                    <h3>{ title }</h3>
                    MainView content
                </MainView>
            );
        }
    ),
};
