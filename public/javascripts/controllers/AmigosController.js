angular.module("amigo").controller('AmigosController', function($scope, $resource){
	
	var Amigos = $resource("/amigos")
	
	var carregaAmigos = function(){
		Amigos.query(function(amigos){
			$scope.amigos = amigos
		}, function(erro){
			console.log(erro)
		})
	}	

	carregaAmigos()
})