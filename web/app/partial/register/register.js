(function(){
        angular.module('app.partial')
            .controller('RegisterCtrl', RegisterCtrl);

        function RegisterCtrl($state, toasterService, userService) {
            var vm = this;
            vm.user = {};

            vm.register = function(){
                userService.register(vm.user)
                .then(function(){
                    toasterService.saved('Registered- Please login');
                    $state.go('login.login');
                }, function(){
                    toasterService.error('Error - please try again.')
                });
            };
        }
})();
