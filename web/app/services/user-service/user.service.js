(function(){
    angular.module('app.services')
        .service('userService', UserService);

        function UserService($http, apiUrl, localStorageService) {
            return {
                userName: userName,
                isLoggedIn: isLoggedIn,
                register: register
            };

            function userName() {
                var auth = localStorageService.get('authorizationData');
                return auth ? auth.userName : 'N/A';
            }
            function isLoggedIn() {
                return !!localStorageService.get('authorizationData');
            }

            function register(userData) {
                return $http.post(apiUrl+'account/register', userData);
            }
        }
})();
