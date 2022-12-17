const path = require('path');
const express = require('express');

const app = express();
const cors = require('cors');
app.use(cors());


const bodyParser  = require('body-parser');
app.use(bodyParser.json());
app.use(express.urlencoded({extended: false }));



const router = require('./routes/routes');
app.use('/recipe', router);

app.use(express.static(path.resolve(dirname, 'client','build')));

const PORT = process.env.PORT || 3001;

app.get("/recipe", (req, res) => {
  res.json({ message: "deployed" });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

app.get('*', function (req, res) {
  const index = path.join(dirname, 'client','build', 'index.html');
  res.sendFile(index);
});