const Mail = require('../schemas/MailSchema')
const Mailler = require('../../utils/sendMail')

module.exports = app => {

  app.route('/sendMail')
    .get(listAllMails)
    .post(createMail)  
}


const createMail = function(req, res) {
  const newMail = new Mail(req.body)
  newMail.save( (err, mail) => {

    err
    ? res.send(err)
    : Mailler.sendMail(
        mail.token, 
        mail.to,
        mail.service,
        mail.subject,
        mail.text
      )
      res.json(mail)
  })
}

const listAllMails = function(req, res) {
  Mail.find({}, 
    (err, mail) => {
      err
      ? res.send(err)
      : res.json(mail)
  })
}