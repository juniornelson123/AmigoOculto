angular.module("amigo").factory("InterceptorService", function($location, $q){
	var Interceptor = {
		responseError: 	function(resposta){
			if (resposta.status == 401) {
				$location.path("/login");
			}

			return $q.reject(resposta)
		}
	}

	return Interceptor
})