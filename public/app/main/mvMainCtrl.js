
angular.module('app').controller('mvMainCtrl', function($scope,mvCachedProgrammes) {
    $scope.programmes = mvCachedProgrammes.query();



});