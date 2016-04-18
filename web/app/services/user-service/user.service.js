(function(){
    angular.module('app.services')
        .service('userService', UserService);

        function UserService(localStorageService) {
            return {
                userName: userName,
                isLoggedIn: isLoggedIn
            };

            function userName() {
                var auth = localStorageService.get('authorizationData');
                return auth ? auth.userName : 'N/A';
            }
            function isLoggedIn() {
                return !!localStorageService.get('authorizationData');
            }
        }
})();
