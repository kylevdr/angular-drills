angular.module('arrayApp').controller('arrayController', function($scope, arrayService) {

$scope.getData = function() {
    $scope.myData = arrayService.getData();
}();

$scope.test = "test";

});