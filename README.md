# pc-nrfconnect-boilerplate

This project provides a quick initial setup for developing applications that are loaded by [pc-nrfconnect-core](https://github.com/NordicSemiconductor/pc-nrfconnect-core).

Documentation about [how to create apps](https://github.com/NordicSemiconductor/pc-nrfconnect-core#creating-apps).

This boilerplate provides:
- an `index.jsx` which contains an empty implementation of all functions in the API
- configuration for build tools (babel/webpack/eslint)
- basic styling
- unit test framework

## Quick start

1. Create the app root directory if it does not already exist:

        mkdir -p $HOME/.nrfconnect-apps/local

2. Download this project by
    - cloning this project under aforementioned directory and remove .git version control

            cd $HOME/.nrfconnect-apps/local
            git clone https://github.com/NordicSemiconductor/pc-nrfconnect-boilerplate.git my-new-app
            cd my-new-app
            rm -rf .git

    - or downloading [the latest archive](https://github.com/NordicSemiconductor/pc-nrfconnect-boilerplate/archive/master.zip) and extract it under `$HOME/.nrfconnect-apps/local/my-new-app`.

3. Modify relevant properties in `package.json`
4. Install development dependencies:

        npm install

5. Build by the following command, which keeps watching for modification:

        npm run dev

6. For one time or continuous testing:

        npm test
        npm run test-watch

7. Successful build is ready to be loaded by *Core*.
8. Any function that is not needed can be removed from `index.jsx`.
