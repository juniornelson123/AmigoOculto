var passport = require("passport")
var GitHubStrategy = require("passport-github")
var FacebookStrategy = require("passport-facebook")
var LocalStrategy = require("passport-local")
var mongoose = require("mongoose")
module.exports = function(){
	var Usuario = mongoose.model("Usuario")
	
	passport.use(new LocalStrategy(
		function(username, password, done){
			User.findOne({nome: username}, function(err, usuario){
				if (err) {return done(err);}
				if (!usuario) {return done(null, false);}
				if (!usuario.verifyPassword(password)) {return done(null, false)}
			})
		}
	))


	passport.use(new GitHubStrategy({
		clientID:"0592e4c8551fbb7f58ab",
		clientSecret:"6f18dbc029392f8cd1118b4cffc94e044630f3ad",
		callbackURL:"http://localhost:3030/auth/github/callback"
	},function(accessToken, refreshToken, profile, done){
		Usuario.findOrCreate(
			{"email": profile.username},
			{"nome": profile.username},
				function(erro, usuario){
					if(erro){
						return done(erro);
					}

					return done(null, usuario)
				}
			)
		}
	));

	passport.use(new FacebookStrategy({
		clientID:"262924630819420",
		clientSecret:"bbb98b7e0d5bac4dd92faec56da7d8a2",
		callbackURL:"https://localhost:3030/auth/facebook/callback"
	},function(accessToken, refreshToken, profile, done){
		Usuario.findOrCreate(
			{"email": profile.username},
			{"nome": profile.username},
				function(erro, usuario){
					if(erro){
						return done(erro);
					}

					return done(null, usuario)
				}
			)
	}))



	passport.serializeUser(function(usuario, done) {
		done(null, usuario._id);
	});

	passport.deserializeUser(function(id, done) {
		Usuario.findById(id).exec().then(function(usuario) {
			done(null, usuario);
		});
	});
}