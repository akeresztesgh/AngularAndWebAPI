(function(){
    angular.module('app.services')
        .service('dashboardService', DashBoardService);

        function DashBoardService($http, apiUrl){
            return {
                testValues: testValues
            };

            function testValues() {
                return $http.get(apiUrl + 'values');
            }
        }
})();
