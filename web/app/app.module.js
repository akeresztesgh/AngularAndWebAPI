(function() {
    'use strict';

    var app = angular.module('app', [
        'angular-jwt',
        'app.partial',
        'app.services',
        'app.directives'
    ]);

    app.config(function($locationProvider, $urlRouterProvider, localStorageServiceProvider) {
        $locationProvider.html5Mode(false);
        $urlRouterProvider.otherwise('/dashboard');
        localStorageServiceProvider
            .setPrefix('App')
            .setStorageType('sessionStorage');
    });

    app.config(function($httpProvider, jwtInterceptorProvider) {
        jwtInterceptorProvider.tokenGetter = ['localStorageService', function(localStorageService) {
            var auth = localStorageService.get('authorizationData');
            return auth ? auth.token : null;
        }];
        $httpProvider.interceptors.push('jwtInterceptor');
        $httpProvider.interceptors.push('authInterceptorService');
    });

    app.run(function($rootScope, $state, localStorageService, jwtHelper) {
        $rootScope.$on('$locationChangeStart', function() {
            // var auth = localStorageService.get('authorizationData');
            // if(!auth || !auth.token){
            //     $state.go('login.login');
            //     return;
            // }

            // if (!jwtHelper.isTokenExpired(token)) {
            //     $rootScope.$broadcast('login');
            // } else {
            //     $state.go('login.login');
            // }
        });
    });

})();
