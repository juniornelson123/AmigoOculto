angular.module("amigo").config(function($routeProvider){
	$routeProvider.when("/login", {
		templateUrl: "partials/login.ejs",
		controller: "LoginController"
	});

	$routeProvider.when("/", {
		templateUrl: "partials/amigos/index.ejs",
		controller: "AmigosController"
	});

	$routeProvider.when("/amigos", {
		templateUrl: "partials/amigos/index.ejs",
		controller: "AmigosController"
	});

	$routeProvider.when("/novo-amigo", {
		templateUrl: "partials/amigos/form.ejs",
		controller: "NovoAmigoController"
	});


	$routeProvider.otherwise("/amigos")
})