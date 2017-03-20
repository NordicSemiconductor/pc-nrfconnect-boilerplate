import React from 'react';

export default {
    decorateSerialPortSelectorItem: SerialPortSelectorItem => (
        props => (
            <SerialPortSelectorItem {...props} />
        )
    ),
};
