(function(){
    'use strict';

    angular.module('app.partial')
        .config(function($stateProvider){
            $stateProvider
                .state('register', {
                    url: '/register',
                    templateUrl: 'app/partial/register/register.html',
                    controller: 'RegisterCtrl',
                    controllerAs: 'vm'
                });
        });
})();
