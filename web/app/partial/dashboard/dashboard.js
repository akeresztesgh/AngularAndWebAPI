(function(){
    'use strict';

     angular.module('app.partial')
        .controller('DashboardCtrl', DashboardCtrl);

        function DashboardCtrl(dashboardService) {
            var vm = this;
            vm.msg = 'this is a message';

            dashboardService.testValues()
                .then(function(resp){
                    vm.values = resp.data;
                });
        }
})();
