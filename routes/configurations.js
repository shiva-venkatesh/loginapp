var express = require('express');
var router = express.Router();

var Configuration = require('../models/configuration');

function ensureAuthenticated(req, res, next){
	if(req.isAuthenticated()){
		return next();
	} else {
		req.flash('error_msg','You are not logged in');
		res.redirect('/users/login');
	}
}

const get_new_configuration = (req, res) => {
	res.render('create_configuration')
}

const post_new_configuration = (req, res, next) => {
  const current_username = req.user.username	
	console.log('---------')
	console.log(req.body.jump)
	console.log(req.body.shoot)
	console.log(req.body.slide)
	console.log(req.body.run)
	console.log('---------')
	 var query = { username: current_username }
	 var newObj = {
	 		username: current_username,
	 		jump: req.body.jump,
	   	shoot: req.body.shoot,
	    slide: req.body.slide,
	    run: req.body.run
	 }
	 Configuration.findOneAndUpdate(query, newObj, {upsert: true}, function(err) {
	 	console.log(err)
	 })
}

const show_configuration = (req, res) => {
  var configQuery = Configuration.find({ username: req.user.username })
  var promise = configQuery.exec()
  promise.then(function(config) {
    res.render('show_configuration', {config: config})
  })
}

const show_configuration_API = function(req, res) {
  var configQuery = Configuration.find({ username: req.user.username })
  var promise = configQuery.exec()
  promise.then(function(config) {
    res.json(config)
  })
}

const copy_configuration = (req, res) => {
 const current_username = req.user.username
 Configuration.find({}, 'username', function(err, users) {
      if(err){
        console.log(err);
      } else{
			  res.render('existing_configuration', {users: users})
      }
  })
}

router.get('/new', ensureAuthenticated, get_new_configuration)
router.post('/new', ensureAuthenticated, post_new_configuration, show_configuration)

router.get('/copy', ensureAuthenticated, copy_configuration)
router.get('/show', ensureAuthenticated, show_configuration)
router.get('/show.json', ensureAuthenticated, show_configuration_API)

module.exports = router