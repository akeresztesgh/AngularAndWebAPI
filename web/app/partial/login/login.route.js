(function(){
    'use strict';

    angular.module('app.partial')
        .config(function($stateProvider){
            $stateProvider
                .state('login', {
                    url: '/login',
                    abstract: true,
                    templateUrl: 'app/partial/blank.template.html'
                })
                .state('login.login', {
                    url: '',
                    templateUrl: 'app/partial/login/login.html',
                    controller: 'LoginCtrl',
                    controllerAs: 'vm'
                });
        });
})();
