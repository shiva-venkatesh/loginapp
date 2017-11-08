var express = require('express');
var router = express.Router();

function ensureAuthenticated(req, res, next){
	if(req.isAuthenticated()){
		return next();
	} else {
		req.flash('error_msg','You are not logged in');
		res.redirect('/users/login');
	}
}

const post_new_configuration = (req, res) => {
	console.log(req.body.jump)
}

const get_new_configuration = (req, res) => {
	res.render('create_configuration')
}

router.get('/new', ensureAuthenticated, get_new_configuration)
router.post('/new', ensureAuthenticated, post_new_configuration)

module.exports = router