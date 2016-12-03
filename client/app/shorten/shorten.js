angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  // Your code here
  $scope.submitted = false;
  $scope.link = '';

  $scope.validate = function(link) {
    //validate
      //if fails
        //alert user
      //if success
        //$scope.addLink(link)

  };
  //

  $scope.addLink = function(link) {
    var prepLink = {url: link};
    console.log('submitted link', link);
    $scope.submitted = true;
    Links.addOne(prepLink).then(function(link) {
      console.log(link, link.data, '*************');
      $scope.newLink = link.data;
    });
    $scope.link = '';
  };
  // $scope.renderSubmitted = 
});
