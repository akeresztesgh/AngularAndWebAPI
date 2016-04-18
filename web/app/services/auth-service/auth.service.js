(function () {
    'use strict';

    angular
        .module('app.services')
        .factory('authService', authService);

    function authService($http, $q, $log, localStorageService, baseUrl, jwtHelper) {

        return {
            login : login,
            logOut : logOut
        };

        function login(loginData) {

            var data = 'grant_type=password&username=' + loginData.userName +
                       '&password=' + loginData.password;
            var deferred = $q.defer();

            $http.post(baseUrl + 'token', data, {
                        headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            })
            .then(function(response){
                localStorageService.set('authorizationData', {token: response.data.access_token, userName: response.data.userName});
                localStorageService.set('userName', response.data.userName);

                //var tokenPayload = jwtHelper.decodeToken(response.access_token);
                //localStorageService.set('userName', tokenPayload.userName);
                //localStorageService.set('role', tokenPayload.role);
                //$log.debug(tokenPayload);

                return deferred.resolve(response);
            }, function(err){
                logOut();
                return deferred.reject(err);
            });
            return deferred.promise;
        }

        function logOut() {
            localStorageService.clearAll();
        }
    }
})();
