module.exports = function(){
	var IndexControler = {
		login: function(req, res){
			var logado = false
			console.log(logado)
		},

		logado: function(req, res){
			console.log(req.user)
			if(req.user) {
				console.log(req.user)
				login = req.user.email;
				res.render('index', { "usuarioLogado" : login});
			}else{
				res.render("login", {nome:	'Express'});
				
			}
		}
	
	}
		


	

	return IndexControler
	
}