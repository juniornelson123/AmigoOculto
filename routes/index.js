function verificaAutenticacao(req, res, next) {
	if (req.isAuthenticated()) {
		return next();
	} else {
		res.status('401').json('Não autorizado');
	}
}
var passport = require("passport")
module.exports = function(app){
	var index = app.controllers.index

	app.get('/',function(req, res) {
	var login = '';
	if(req.user) {
		console.log(req.user)
		login = req.user.email;
				
		res.render('index', { "usuarioLogado" : login});
	}else{
		res.render("login", {nome:	'Express'});
		
	}
	});

	app.get('/logout', function(req, res) {
		req.logOut(); // exposto pelo passport
		res.redirect('/');
	});

	app.post('/login', passport.authenticate('local', { failureRedirect: '/' }),function(req, res) {
    res.redirect('/');
  });
}