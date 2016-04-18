(function(){

    'use strict';

    angular.module('app')
    .factory('authInterceptorService',  function ($q, $injector) {

        return  {
            request: function (config) {

                config.headers = config.headers || {};
                // TODO: set headers
                //config.tableId = ...
                return config;
            },
            responseError: function (rejection) {
                var deferred = $q.defer();

                if(rejection.status === 401) {
                    $injector.get('$state').go('login.login');
                    deferred.reject(rejection);
                }
                else if (rejection.status === 403) {
                    $injector.get('$state').go('dashboard.dashboard');
                    deferred.reject(rejection);
                }
                else {
                    deferred.reject(rejection);
                }
                return deferred.promise;
            }
        };

    });
})();
