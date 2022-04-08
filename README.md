# Rentorr Service Web App
The Rentorr Service Web App is a [Single Page Application](https://en.wikipedia.org/wiki/Single-page_application) built using [React](https://facebook.github.io/react/) and [Redux](http://redux.js.org).

| Contents |
|:---------|
| [Getting Started](#getting-started) |
| [Setting up dev environment](#setting-up-dev-environment) |
| [Testing and code coverage](#testing-and-code-coverage) |
| [Architecture and Design](#architecture-and-design) |
| [Learn More](#learn-more) |

## Getting Started

ReactJS version of Rentorr Service Web App and testing requires [Node.js](https://nodejs.org)

Install all the dependencies:

    `npm install` or `yarn`
    
To add one package into dependencies in package.json:

    `npm install --save <package-name> [--save-prod]` or `yarn add <package-name>`
    
To add one package into devDependencies in package.json:

    `npm install <package-name> --save-dev` or `yarn add <package-name> --dev`

## Setting up dev environment

In development we make use of a locally stored (not in version control for security) `.env` file.

Please copy the content in `.env.${environment}.${scope}` file and paste to the `.env` file.

A local template for this file can be found in [`.env.local`](.env.local)
A development server can be found in [`.env.development`](.env.development)
A production server can be found in [`.env.production`](.env.production)

Sets up environment variable for calling back-end api:

    `npm run start` or `yarn start`
    
Runs the app in the development mode.<br>
Open [http://localhost:8080](http://localhost:8080) to view it in the browser.
In addition to, if you launch this web app in the another port, you can set up the port manually in the webpack.config.js file.

The page will reload if you make edits.<hr>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

## Testing and code coverage

Run below command line in terminal
    
    `npm run test:coverage` or `yarn run test:coverage`
    
## Architecture and Design

    Tools<br>
    * Custom configuration(building from scratch)<br>
    * Webpack<br>
    * React.js<br>
    * Redux<br>
    * Redux-thunk<br>
    * Redux-saga<br>
    * Redux-logger<br>
    * SCSS<br>
    
## Learn More

To learn React, check the links below:
    - [React app documentation](https://reactjs.org/)
    - [Thinking in React](https://facebook.github.io/react-docs/think-in-react.html)
    - [Redux Documentation](https://redux.js.org)
