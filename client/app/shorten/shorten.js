angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  $scope.submitted = false;
  $scope.link = '';

  $scope.addLink = function(link) {
    var prepLink = {url: link};
    Links.addOne(prepLink).then(function(link) {
      $scope.newLink = link.data;
      $scope.submitted = true;
    });
    $scope.link = '';
  };
});
