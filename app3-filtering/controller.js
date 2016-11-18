angular.module('app3').controller('app3Controller', function($scope, app3Service) {

$scope.getData = function() {
    $scope.myData = app3Service.getData();
}();

});