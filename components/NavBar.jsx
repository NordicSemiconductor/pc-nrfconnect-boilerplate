import React from 'react';

export default {
    decorateNavBar: NavBar => (
        props => (
            <NavBar {...props} />
        )
    ),
};
