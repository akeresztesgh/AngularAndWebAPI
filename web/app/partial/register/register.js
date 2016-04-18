(function(){
        angular.module('app.partial')
            .controller('RegisterCtrl', RegisterCtrl);

        function RegisterCtrl(toasterService) {
            var vm = this;
            vm.user = {};

            vm.register = function(){
                toasterService.saved('Registered');
                vm.asdf = 'asdf';
            };
        }
})();
