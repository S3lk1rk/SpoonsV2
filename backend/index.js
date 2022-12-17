const express = require("express");
const app = express();
const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(__filename);

const cors = require('cors');
app.use(cors());

const bodyParser  = require('body-parser');
app.use(bodyParser.json());
app.use(express.urlencoded({extended: false }));

const router = require('./routes/routes');
app.use('/', router);

app.use(express.static(path.join(dirname, "client", "build")))


app.get("*", (req, res) => {
    res.sendFile(path.join(dirname, "client", "build", "index.html"));
})

app.listen(process.env.port || 3001, () => {
  console.log("Server started on port 3001. Ctrl^c to quit.");
});
