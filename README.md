# pc-nrfconnect-boilerplate

This project provides a quick initial setup for developing applications that are loaded by pc-nrfconnect-core.

The provided `index.jsx` file covers functions that are mapped by Core to decorate the available React components.

The decorator functions are meant to return higher order components wrapping the original components provided by Core.

It is possible the define new properties to these components by the means of the `map${name}Dispatch()` functions.

State mapper `map${name}State()` functions are mapping the redux store's state to the individual components' properties.

The reducer functions are invoked for all actions triggered by either Core or the application. Reducers can implement handlers or modify the state accordingly.

The `middleware()` function intercepts all actions globally.
