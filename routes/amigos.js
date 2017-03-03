function verificaAutenticacao(req, res, next) {
	if (req.isAuthenticated()) {
		return next();
	} else {
		res.status('401').json('Não autorizado');
	}
}

module.exports = function(app){
	var amigos = app.controllers.amigos	
	app.get("/amigos", amigos.index);
	app.get("/amigos/:id", amigos.show);
}