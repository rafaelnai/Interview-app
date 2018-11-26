import emailjs from 'emailjs-com'

var templateParams = {
  name: 'James',
  notes: 'Check this out!'
};

emailjs.send('gmail','template_wq394HLG', templateParams)
  .then(function(response) {
     console.log('SUCCESS!', response.status, response.text);
  }, function(err) {
     console.log('FAILED...', err);
  });