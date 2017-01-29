import angular from 'angular';

import uglMain from './ugl-main.component.js';
import uglName from './ugl-name.component.js';

let componentsModule = angular.module('ugl.components', [])
    .component('uglMain', uglMain)
    .component('uglName', uglName);

export default componentsModule.name;
