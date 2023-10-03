const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require('path');

const staticPath = path.join(__dirname, '../backend/views/');

const app = express();

app.use(express.static(staticPath));

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (req,res) {
  res.sendFile(path + "index.html");
});

require("../backend/routes/hmac.routes.js")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});