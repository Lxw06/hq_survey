const express = require("express"); // access the express lib. share files

const app = express(); // generate new app
// single app
//listen incomng request

app.get("/", (req, res) => {
  res.send({ hi: "there" });
});

const PORT = process.env.PORT || 5000; // inject env variable at run timeout

app.listen(PORT);
