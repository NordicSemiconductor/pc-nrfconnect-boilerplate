# nRF Connect Boilerplate

[![Build Status](https://dev.azure.com/NordicSemiconductor/Wayland/_apis/build/status/pc-nrfconnect-boilerplate?branchName=master)](https://dev.azure.com/NordicSemiconductor/Wayland/_build/latest?definitionId=10&branchName=master)
[![License](https://img.shields.io/badge/license-Modified%20BSD%20License-blue.svg)](LICENSE)

*nRF Connect Boilerplate* provides a starting point for developing apps that can be launched by [nRF Connect for Desktop](https://github.com/NordicSemiconductor/pc-nrfconnect-core).

## Quick start

1. Create the `.nrfconnect-apps/local` directory if it does not already exist:

    * Linux/macOS: `mkdir -p $HOME/.nrfconnect-apps/local`
    * Windows: `md "%USERPROFILE%\.nrfconnect-apps\local"`

2. Clone this project under the `local` directory. In a terminal on Linux/macOS or Git bash on Windows:

        cd $HOME/.nrfconnect-apps/local
        git clone https://github.com/NordicSemiconductor/pc-nrfconnect-boilerplate.git pc-nrfconnect-myapp
        cd pc-nrfconnect-myapp
        rm -rf .git

    Alternatively, if you do not want to use Git, you could download the the current master branch as a [zip file](https://github.com/NordicSemiconductor/pc-nrfconnect-boilerplate/archive/master.zip) and extract it under `.nrfconnect-apps/local/pc-nrfconnect-myapp`.

3. Modify relevant properties in `package.json`. At least consider changing:

    * name
    * displayName
    * version
    * author
    * license
    * repository.url

4. Install dependencies:

        npm install

5. Build the project in development mode:

        npm run dev

    This will keep running and watch for changes (Ctrl+C to stop). Alternatively, to build just once in production mode, run `npm run build`.

6. Run unit tests:

        npm run test-watch

    This will keep running and watch for changes (Ctrl+C to stop). Alternatively, to run tests just once, run `npm test`.

7. Start nRF Connect and verify that your app appears in the *Launch app* screen. If the build was successful, you should be able to launch it. Chrome Developer Tools can be opened by pressing Ctrl+Alt+I (Windows/Linux) or Cmd+Option+I (macOS).

8. Add your own implementation in `index.jsx` to adjust the behavior of the app.

## Development

See the [app development](https://nordicsemiconductor.github.io/pc-nrfconnect-docs/) pages for details on how to develop apps for the nRF Connect for Desktop framework.

## Feedback

Please report issues on the [DevZone](https://devzone.nordicsemi.com) portal.

## Contributing

See the [infos on contributing](https://nordicsemiconductor.github.io/pc-nrfconnect-docs/contributing) for details.

## License

See the [LICENSE](LICENSE) file for details.
