
const express = require("express");
const app = express();

const cors = require('cors');
app.use(cors());

//const dotenv = require('dotenv');
require('dotenv').config()
console.log(process.env)

const path = require('path');


const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));

const router = require('./routes/routes');
app.use('/', router);

app.use(express.static(path.join(__dirname, "client", "build")))


app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
})

app.listen(process.env.PORT || 3001, () => {
  console.log("Server started on port 3001. Ctrl^c to quit.");
});
