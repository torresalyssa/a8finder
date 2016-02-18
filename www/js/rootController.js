app.controller('rootController', function($scope, nodeA8) {

    $scope.foundServers = ['testserver'];

    $scope.$on('FOUND_A8', function(event, args) {
        $scope.foundServers.push(args);
    });

    nodeA8.huntServers();
});