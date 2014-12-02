angular.module('', []);

var blog_url = "http://api.tumblr.com/v2/blog/mydailygraphic.tumblr.com/posts/photo?api_key=v06giPOpbyU3GPSTxrAu5HcR3UFVL35IPEjbWrf9K4qccg4JXs&callback=JSON_CALLBACK";
	function tumblrCall($http, $scope){
			$http.jsonp(blog_url).
		  		success(function(data){
		  			$scope.date = data.response.blog.updated;
		  			$scope.blog_name = data.response.blog.name;
		     		$scope.mydailygraphic = data.response.posts;
		     		$scope.posts = data.response.posts;
		 		}).
		    	error(function(data){ 
		     		$scope.data = "REQUEST FAILED";		     		
	    	});
		
	}

/*angular.module('', []);

function DataCtrl($scope, $http) {
  
  $http.jsonp("http://angularjs.org/greet.php?callback=JSON_CALLBACK&name=Super%20Hero").
  success(function(data) {
    $scope.data = data;
    $scope.name = data.name;
    $scope.salutation = data.salutation;
    $scope.greeting = data.greeting;
    
    $("[ng-model='nameNew']").val(data.name);
    $("[ng-model='salutation']").val(data.salutation);
    $("[ng-model='greeting']").val(data.greeting);
  }).
  error(function (data) {
    $scope.data = "Request failed";
  });
  
}*/