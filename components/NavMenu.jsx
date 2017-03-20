import React from 'react';

const logSelected = item => (
    (dispatch, getState, { logger }) => (
        logger.info(`Selected ${item}`)
    )
);

export default {
    mapNavMenuState: (state, props) => ({
        ...props,
    }),
    mapNavMenuDispatch: (dispatch, props) => ({
        ...props,
        onItemSelected: item => dispatch(logSelected(item)),
    }),
    decorateNavMenu: NavMenu => (
        props => (
            <NavMenu
                {...props}
                menuItems={[
                    { id: 'about', text: 'About', iconClass: 'icon-star' },
                ]}
            />
        )
    ),
};
