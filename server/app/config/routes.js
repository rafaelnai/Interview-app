
module.exports = function(app){

	const mailController = require('../middlewares/MailMiddleware')
	const userMailController = require('../middlewares/UserMailMiddleware')
	const interviewDataController = require('../middlewares/InterviewDataMiddleware')

	app.route('/register')
		.post(userMailController.createUser)

	app.route('/sendMail')
		.get(mailController.listAllMails)
		.post(mailController.createMail)	

	app.route('/interviewData')
		.get(interviewDataController.listAllInterviewData)
		.post(interviewDataController.createInterviewData)
			
	app.route('/interviewData/theme/:theme')
		.get(interviewDataController.listInterviewDataByTheme)

	app.route('/interviewData/person/:idPerson')
		.get(interviewDataController.listInterviewDataByIdPerson)
		.put(interviewDataController.updateInterviewData)
		.delete(interviewDataController.deleteInterviewData)

	app.route('/user')
		.get(userMailController.listAllUsers)

	app.route('/user/:token')
		.get(userMailController.listUserByToken)
}
