import template from './ugl-name.html';

export default {
    template,
    controllerAs: 'UglName',
    controller: function($stateParams) {
        this.name = $stateParams.name;
        this.getName = () => this.name;
    }
}
