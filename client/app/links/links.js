var links = angular.module('shortly.links', []);



links.controller('LinksController', function ($scope, Links) {
  // Your code here
  $scope.data = {};
  Links.getAll().then(function(links) {
    $scope.data.links = links;
    // console.log('link', $scope.data);
  });

});
