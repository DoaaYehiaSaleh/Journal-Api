// Express to run server and routes

const express = require('express');

// Start up an instance of app

const app = express();

/* Dependencies */

//Here we are configuring express to use body-parser as middle-ware.

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
/* Middleware*/
// Cors for cross origin allowance

const cors = require('cors');
app.use(cors());

// Initialize the main project folder

app.use(express.static('website'));

// TODO-Spin up the server

const port = 8000;
const server = app.listen(port, listening);
function listening(){
    console.log(server);
    console.log(`running on localhost: ${port}`);
};


// Callback function to complete GET '/all'
app.get("/getAll", (req, res) => {
    res.send(projectData).status(200).end();
    //endpoint
    projectData = {};
  });

  //post routes
  app.post("/postData", (req, res) => {
    console.log(req.body);
    projectData = {
      date: req.body.date,
      temp: req.body.temp,
      content: req.body.content,
    };
  });


