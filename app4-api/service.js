angular.module('app4').service('app4Service', function($http) {

    var pokeUrl = 'http://pokeapi.co/api/v2/';
    
    this.getPokemon = function() {

        return $http({
        method: 'GET',
        url: pokeUrl + 'pokemon/'
        }).then(function(results) {
            return results.data.results;
        });

    };
});