import React from 'react';

export default {
    mapSidePanelState: (state, props) => ({
        ...props,
    }),
    mapSidePanelDispatch: (dispatch, props) => ({
        ...props,
    }),
    decorateSidePanel: SidePanel => (
        props => (
            <SidePanel {...props}>
                SidePanel content
            </SidePanel>
        )
    ),
};
