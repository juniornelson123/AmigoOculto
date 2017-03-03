angular.module("amigo").config(function($routeProvider){
	$routeProvider.when("/login", {
		templateUrl: "partials/login.ejs",
		controller: "LoginController"
	});

	$routeProvider.when("/", {
		templateUrl: "partials/login.ejs",
		controller: "LoginController"
	});

	$routeProvider.when("/amigos", {
		templateUrl: "partials/amigos/index.ejs"
	});


	$routeProvider.otherwise("/")
})