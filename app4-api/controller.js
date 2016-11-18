angular.module('app4').controller('app4Controller', function($scope, app4Service) {

    $scope.getPokemon = function() {
        app4Service.getPokemon().then(function(results) {
            $scope.pokemon = results;
            console.dir($scope.pokemon);
        });
    }();

});