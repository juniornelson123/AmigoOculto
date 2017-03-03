module.exports = function(app){
	var Amigo = app.models.Amigo;
	var AmigosController = {
		index: function(req, res){
			var id = "58b8a90816e1f18ef4df52fd"
			if(req.user){
				id = req.user._id
			}
			console.log(Amigo)
			Amigo.find().populate("usuario").exec().then(function(amigos){
				res.json(amigos)
			}, function(erro){
				console.log(erro)
			})
		},

		show: function(req, res){
			var _id = req.params.id
			Amigo.findById(_id).exec().then(function(amigo){
				if	(!amigo) throw new	Error("Contato	não	encontrado");
				res.json(amigo)
			}, function(erro){
				console.log(erro)
			})
		},

		create:function(req,res){
			req.body.usuario = req.user._id
			Amigo.create(req.body).then(function(contato){
				return res.json(contato)
			}, function(erro){
				res.status(500).json(erro)
			})
		},

		delete: function(req, res){

		}
	}

	return AmigosController
}