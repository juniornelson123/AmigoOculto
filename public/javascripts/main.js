angular.module('amigo', ['ngRoute','ngResource']).config(function($routeProvider, $httpProvider){
	$httpProvider.interceptors.push("InterceptorService")
})