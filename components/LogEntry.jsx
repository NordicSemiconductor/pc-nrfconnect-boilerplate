import React from 'react';

export default {
    decorateLogEntry: LogEntry => (
        props => (
            <LogEntry {...props} />
        )
    ),
};
