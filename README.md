**[Setup](#setup)**  | **[Build](#build)** | **[Development](#development)** | **[Unit tests](#running-unit-tests)** | **[Integration Tests](#Running-end-to-end-tests)** | **[Deployment](#deployment)** 

# wifu
A static web interface

## Setup

To get up and running a simple install of reliant packages is all that is needed

```
npm install -g @angular/cli
npm install
```

## Build

Run `ng build` to build the project. Run `ng build --prod` to build the project in production ready mode.  The build artifacts will be stored in the `dist/` directory.  If you would like to view the production build running locally you can use `ng serve --prod` to serve up a production compiled version of the site.

## Development

```
npm start
```

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Deployment

wifu is backed by [travis-ci](https://docs.travis-ci.com/) for a full CD/CI
pipeline experience.  What this means,  any pull request will requre a successful
verified build by travis-ci as well as at least one peer review approval before 
being allowed to be merged up to the branch.
