# Angular 6 Ionic 4 Webpack 4 Starter

Angular 6 Ionic 4 starter project using Webpack 4 and [@ngtools/webpack](https://github.com/angular/devkit/tree/master/packages/ngtools/webpack) for AoT template compilation.

Includes Sass support

## Motivation

As ionic is no more in angular, and if you choose to use new version with it, it seems pretty sure that it will use [Angular CLI](https://cli.angular.io/). So this projects reasons are

* Isolate the project from possible breaking changes between the cli and Ionic (I really don't like clis).
* Build as a web app or a Cordova mobile app, with slightly different settings. E.g. `cordova.js` should not be included when deploying to a web server.
* Encapsulate styles in components the Angular way, i.e. using `styleUrls`, instead of requiring Sass rules to match the component `selector`.
* Follow the Angular [style guide](https://angular.io/styleguide#!#02-02) convention for file naming.

In other words, have full control over the build process.

## Usage

### Clone This Project

Simply clone this project and use it as it is, or rename it to whatever you like.
```
git clone
```

### Install Dependencies

Install all the dependencies (this only needs to be done once) with NPM:
```
npm install
```
(You can also use [Yarn](https://yarnpkg.com/) instead of NPM of course.)

### Local Development Server

To start a local development web server with automatic refresh type:
```
npm start
```
Your application will be accessible at [localhost:3000](http://localhost:3000/) with a proxy **/api/** on http://localhost:8000 by default. See the [webpack-dev-server docs](https://webpack.github.io/docs/webpack-dev-server.html) if you want to customise anything.
