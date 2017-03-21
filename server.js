
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.route('/api/api-my-app').get(function (req, res) {
  res.send([
    {
      icon: 'default',
      name: 'myCoolApp',
      type: 'watch',
      version: '1.0',
      submissionState: 'Prepare for Submission'
    },
    {
      icon: 'default',
      name: 'my notSoCoolApp',
      type: 'ios',
      version: '1.0',
      submissionState: 'Review'
    }
  ])
});


//start server
app.listen(port, function(){
  console.log("Simple app server listening on port " + port);
});
