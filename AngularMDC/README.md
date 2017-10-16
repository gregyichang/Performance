# AngularJS - Material Design Components for Web Implementation

The implementation uses `@fintechstudios/angularjs-mdc`, which defines the AngularJS adapters for the MDC components. 
One issue with `@fintechstudios/angularjs-mdc` is that it does not have any community behind it. It has some subtle bugs, like typos.
However, since Material Design Components for Web is implemented to be pluggable to any JS framework, contributing to this repository, or forking it,
will not be too much effort.

[Read this to see how MDC stays framework agnostic and is able to plug into any framework](https://material.io/components/web/docs/architecture-overview/).

## Getting started with this implementation

* Open a terminal at the root folder: `AngularMDC`. 
* Run the command `npm install` 
* Run the command `npm run build`. This will create a `dist/` folder, which has everything bundled into `app.js`.
* To serve the folder as an http endpoint, you can use `serve`.
