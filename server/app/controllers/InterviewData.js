const InterviewData = require('../schemas/InterviewDataSchema')

module.exports = app => {

	app.route('/interviewData')
		.get(listAllInterviewData)
		.post(createInterviewData)
			
	app.route('/interviewData/theme/:theme')
		.get(listInterviewDataByTheme)

	app.route('/interviewData/person/:idPerson')
		.get(listInterviewDataByIdPerson)
		.put(updateInterviewData)
		.delete(deleteInterviewData)
}

const createInterviewData = (req, res) => {

	const newID = new InterviewData(req.body)
  	newID.save((err, interviewData) => {

  		err 
  		? res.send(err)
    	: res.json(interviewData)
  	})
}

const listAllInterviewData = (req, res) => {

	InterviewData.find({}, (err, interviewData) => {

		err 
		? res.send(err)
		: res.json(interviewData)
  	})
}

const listInterviewDataByTheme = function(req, res) {

	InterviewData.find(
		{theme: req.params.theme }, 
		(err, interviewData) => {

			err
			? res.send(err)
			: res.send(interviewData)
  		}
  	)
}

const listInterviewDataByIdPerson = (req, res) => {

	InterviewData.find(
		{idPerson: req.params.idPerson }, 
		(err, interviewData) => {

			err
			? res.send(err)
      		: res.send(interviewData)
  		}
  	)
}
  
const deleteInterviewData = (req, res) => {

	InterviewData.remove(
		{personId: req.params.personId}, 
		(err, interviewData) => {

			err
      		? res.send(err)
    		: res.json({ message: 'InterviewData successfully deleted' })
    	}
    )
}

const updateInterviewData = (req, res) => {

	InterviewData.findOneAndUpdate(
		{personId: req.params.personId}, 
		req.body, 
		{new: true}, 
		(err, interviewData) => {
			
			err
			? res.send(err)
    		: res.json(interviewData)
    	}
    )
}