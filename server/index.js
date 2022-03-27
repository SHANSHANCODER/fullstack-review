const express = require("express");
const db = require("../database/index.js");
let app = express();
const bodyParser = require("body-parser");
const helpers = require("../helpers/github.js");

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + "/../client/dist"));

app.post("/repos", function (req, res) {
  var targetusername = req.body.username;
  helpers.getReposByUsername(targetusername);
  console.log(req.body);
  console.log("a post request received");

  res.status(200).send("message received");

  //post request interact with githubapi

  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database
});

app.get("/repos", function (req, res) {
  const callback = (err, repos) => {
    if (err) {
      res.status(500).send('err');
      return;
    }
    res.send(repos);
  };
  db.getRepos(callback);
  // query the db. and with res. getting all data and send them
  // to the front end state to show on dom

  // this get request interact with db
  // TODO - your code here!
  // This route should send back the top 25 repos
});

let port = 1128;

app.listen(port, function () {
  console.log(`listening on port ${port}`);
});
