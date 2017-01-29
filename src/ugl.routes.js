export default function($urlMatcherFactoryProvider, $urlRouterProvider, $locationProvider, $stateProvider) {
    "ngInject";

    $urlMatcherFactoryProvider.strictMode(false);
    // $urlRouterProvider.when('/', '');
    $locationProvider.html5Mode(true);

    $stateProvider
        .state('ugl', {
            url: '',
            template: '<ugl-main></ugl-main>'
        })
        .state('ugl.main', {
            abstract: true,
            template: '<ui-view/>'
        })
        .state('ugl.main.name', {
            url: '/:name',
            template: '<ugl-name></ugl-name>'
        })
};
