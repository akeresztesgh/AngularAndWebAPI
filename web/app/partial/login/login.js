(function(){
    angular.module('app.partial')
    .controller('LoginCtrl', HomeCtrl);

    function HomeCtrl($state, authService){
        var vm = this;

        // can't do this in auth-injector becuse it'll create a circular dependency
        authService.logOut();

        vm.user = {};
        vm.login = function(){
            authService.login(vm.user)
                .then(function(){
                    $state.go('dashboard.dashboard');
                }, function(){
                    alert('error!');
                });
        };
    }
})();
