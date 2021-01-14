const express = require("express");
const path = require("path");

const app = express();
//TODO: Heroku enviroment variable on port

const PORT = process.env.PORT || 3000;

const waitList = [];

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

const reservations = [
  {
    routeName: "yoda",
    name: "Yoda",
    role: "Jedi Master",
    age: 900,
    forcePoints: 2000,
  },
];

//for linking java and style
//TODO:create paths
app.get("/", function (req, res) {
  //TODO:fill in .html
  // res.sendFile(path.join(__dirname, ".html"));
  res.send("wlcome make reservfation");
});
//TODO:fill in .html
app.get("/add", function (req, res) {
  // res.sendFile(path.join(__dirname, ".html"));
});

// Displays all characters
app.get("/api/reservations/:peoples", function (req, res) {
  var charecters = req.params.peoples;

  console.log(charecters);

  for (var i = 0; i < people.length; i++) {
    if (charecters === people[i].routeName) {
      return res.json(people[i]);
    }
  }

  return res.json(false);
});

// Create New Characters - takes in JSON input
app.post("/api/reservations", function (req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body parsing middleware
  var newCharacter = req.body;

  // Using a RegEx Pattern to remove spaces from newCharacter
  // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
  newCharacter.routeName = newCharacter.name.replace(/\s+/g, "").toLowerCase();

  console.log(newCharacter);

  people.push(newCharacter);

  res.json(newCharacter);
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
  console.log("App listening on PORT" + "http://localhost:" + PORT);
});
