//angular.module('app').controller('mvNavBarLoginCtrl', function($scope, $http) {
//    $scope.signin = function(username, password) {
//        $http.post('/login', {username:username, password:password}).then(function(response) {
//            if(response.data.success) {
//                console.log("logged in!");
//            }
//            else {
//                console.log("failed to login!");
//            }
//        })
//    }
//});

angular.module('app').controller('mvNavBarLoginCtrl',function($scope,$http,mvIdentity,mvNotifier,mvAuth,$location){
    $scope.identity = mvIdentity;

    $scope.signin = function(username,password){
        mvAuth.authenticateUser(username,password).then(function(success){
            if(success){
                mvNotifier.notify('You have successfully signed in!');
            }
            else{
                mvNotifier.notify('Username/Password combination incorrect!');
            }
        });
    }
});