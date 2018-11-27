const mailUser = require('../schemas/UserMailSchema')

module.exports = app => {

	app.route('/register')
		.post(createUser)

	app.route('/user')
		.get(listAllUsers)

	app.route('/user/:token')
		.get(listUserByToken)
}


const createUser = (req, res) => {

	const newUser = new mailUser(req.body)
	newUser.save( (err, user) => {

		err
		? res.send(err)
		: res.render('pages/registerConfirmation', {

			token: req.body.token,
			username: req.body.user
		})
	})
}

const listAllUsers = (req, res) => {

	mailUser.find({}, 
		(err, user) => {

			err
			? res.send(err)
			: res.json(user)
		}
	)
}

const listUserByToken = function(req, res){

	mailUser.find(
		{token: req.params.token}, 
		(err, user) => {

			err
			? res.send(err)
			: res.json(user)
		}
	)
}