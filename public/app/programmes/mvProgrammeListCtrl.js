angular.module('app').controller('mvProgrammeListCtrl', function($scope,mvCachedProgrammes) {
    $scope.programmes = mvCachedProgrammes.query();

});


//angular.module('app').controller('mvProgrammeListCtrl', function($scope,mvProgramme) {
//    $scope.programmes = mvProgramme.query();
//    //$scope.programmes = mvCachedProgrammes.query();
//    $scope.sortOptions = [
//        {value:"title", text:"Sort by Title"},
//        {value:"published", text:"Sort by Publish Date"}
//    ];
//    $scope.sortOrder = $scope.sortOptions[0].value;
//});