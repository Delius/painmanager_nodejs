angular.module('app').controller('mvProgrammeDetailCtrl', function($scope, mvCachedProgrammes, $routeParams) {
    mvCachedProgrammes.query().$promise.then(function(collection) {
        collection.forEach(function(programme) {
            if(programme._id === $routeParams.id) {
                $scope.programme = programme;
            }
        });
    });
});