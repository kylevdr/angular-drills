angular.module('pokeApp').controller('pokeController', function($scope, pokeService) {

    $scope.getPokemon = function() {
        pokeService.getPokemon().then(function(results) {
            $scope.pokemon = results;
            console.dir($scope.pokemon);
        });
    }();

    $scope.getMore = function(url) {
        pokeService.getMore(url).then(function(results) {
            $scope.pokeInfo = results;
            console.dir($scope.pokeInfo);
        });
    };

});