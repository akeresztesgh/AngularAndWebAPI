(function(){
    angular.module('app.directives', [])
    .directive('navHeader', NavDirective);

    function NavDirective(){
        var directive = {
            bindToController: true,
            controller: NavController,
            controllerAs: 'vm',
            restrict: 'EA',
            templateUrl: 'app/directives/nav-header/nav-header.html'
        };
        return directive;

        function NavController($state, userService){
            var vm = this;
            vm.userName = userService.userName();

            vm.logout = function(){
                $state.go('login.login');
            };
        }
    }
})();
