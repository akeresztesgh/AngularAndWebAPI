(function(){
    'use strict';

    angular.module('app.partial')
        .config(function($stateProvider){
            $stateProvider
                .state('dashboard', {
                    url: '/dashboard',
                    abstract: true,
                    templateUrl: 'app/partial/app.template.html'
                })
                .state('dashboard.dashboard', {
                    url: '',
                    templateUrl: 'app/partial/dashboard/dashboard.html',
                    controller: 'DashboardCtrl',
                    controllerAs: 'vm'
                });
        });
})();
