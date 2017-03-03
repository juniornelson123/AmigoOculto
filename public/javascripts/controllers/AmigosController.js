angular.module("amigo").controller('AmigosController', function($scope, $resource){
	var $scope.amigos = []

	var Amigos = $resource("/amigos")
	console.log("chegou")
	var carregaAmigos = function(){
		Amigos.query(function(amigos){
			$scope.amigos = amigos
			console.log(amigos)
		}, function(erro){
			console.log(erro)
		})
	}	

	carregaAmigos()
})