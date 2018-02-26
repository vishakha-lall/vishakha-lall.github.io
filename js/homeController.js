app.controller('homeController', function($scope,$location,$http){	
	$scope.home=function(){
		$location.path('/home');
	};
	$scope.aboutMe=function(){
		$location.path('/about-me');
	};
	$scope.projects=function(){
		$location.path('/projects');
	};
	$scope.blog=function(){
		$location.path('/blog');
	};
	$scope.contactMe=function(){
		$location.path('/contact-me');
	};
});
