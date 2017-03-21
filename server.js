
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.route('/api/api-my-app').get(function (req, res) {
  res.send([
    {
      id:1,
      icon: 'default',
      name: 'My Cool App',
      type: 'Watch',
      version: '1.0',
      submissionState: 'Prepare for Submission'
    },
    {
      id: 2,
      icon: 'default',
      name: 'My Not So Cool App',
      type: 'IOS',
      version: '1.0',
      submissionState: 'Review'
    }
  ])
});


//start server
app.listen(port, function(){
  console.log("Simple app server listening on port " + port);
});
