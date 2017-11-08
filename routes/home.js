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

const get_configuration_page = (req, res) => {
	res.render('configuration');
}

router.get('/', ensureAuthenticated, get_configuration_page);

module.exports = router