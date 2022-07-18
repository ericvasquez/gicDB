const express = require('express');
const cors = require('cors');
const app = express();
require('./server/config/mongoose.config');
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

//Added
const path = require("path")
require("dotenv").config()
app.use(express.static(path.join(__dirname, "client", "build")))

require('./server/routes/patient.routes')(app)

//Step 1
/* app.use(express.static(path.resolve(__dirname, "./client/build"))); */
//Step 2
/* app.get("*", function (request, response) {
    response.sendFile(path.resolve(__dirname, "./client/build", "index.html"));
  }); */

const port = 8000;

//Added
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

app.listen(port, () => console.log(`GIC db app listening on port ${port}`))