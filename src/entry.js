import angular from 'angular';
import angularUiRouter from 'angular-ui-router';

import components from './components/components.module.js';

import uglRoutes from './ugl.routes.js';

let ugl = angular.module('ugl', [angularUiRouter, components])
    .controller('mainCtrl', function($state) {
        "ngInject";
    })
    .config(uglRoutes);
