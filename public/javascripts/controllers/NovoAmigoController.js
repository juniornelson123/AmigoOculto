angular.module("amigo").controller('NovoAmigoController', function($scope, $resource){
	var Amigo = $resource("/amigos")
	$scope.pessoas = []

	$scope.adiciona = function(pessoa){
		console.log(pessoa)
		$scope.pessoas.push(angular.copy(pessoa))
		console.log($scope.pessoas)
		delete $scope.pessoa
		$scope.form.$setPristine();
	}

	$scope.delete=function(pessoa){
		$scope.pessoas = $scope.pessoas.filter(function(amigo) {
			console.log(amigo)
			return amigo != pessoa;
		});
	}

})