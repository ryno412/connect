const express = require('express');
const bodyParser = require('body-parser');
const serveStatic = require('serve-static');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(serveStatic(__dirname + '/dist', {'index': ['index.html', 'index.htm']}));


const apps = [
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
]

app.route('/api/api-my-app').get(function (req, res) {
  res.send(apps)
});

app.route('/api/app-details/:id').get(function (req, res) {
  const id = req.params.id;
  if (id && apps[id -1]) {
    res.send(apps[id -1])
  }
  else {
    res.sendStatus(400).send({
      msg: "No App with that id"
    })
  }
});

//spa routing
app.get('*', function(req, res) {
  res.sendfile('./dist/index.html');
});

//start server
app.listen(port, function(){
  console.log("Simple app server listening on port " + port);
});
