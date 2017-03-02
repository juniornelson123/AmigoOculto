angular.module("amigo").config(function($routeProvider){
	$routeProvider.when("/login", {
		templateUrl: "partials/login.ejs"
	})

	$routeProvider.otherwise("/")
})