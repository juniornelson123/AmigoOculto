module.exports = function(app){
	var Amigo = app.models.amigo;
	var AmigosController = {
		index: function(req, res){
			Amigo.query().exec().then(function(amigos){
				res.json(amigos)
			}, function(erro){
				console.log(erro)
			})
		}
	}

	return AmigosController
}