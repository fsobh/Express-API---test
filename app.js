const express = require("express"); //import express
const massive = require("massive"); //import massive as the access tool were using to communicate back and forth with the database
const animalRoute = require("./routes/animalRoute"); //animal routes
const PORT = 3000; /*Testing on port 3000 */
require("dotenv").config();

const app = express(); /* Standard */

app.use(express.json()); // requests will use json format

const constructURL = (version, urlPath) => `/api/${version}/${urlPath}`;

// set routers here //
//app.use(constructURL("v1", "animals"), animalRoute); //set animals route

app.set("/", (req, res) => {
  res.sendStatus(200);
});

massive({
  database: process.env.DATABASE, // database name
  host: process.env.DB_HOST, //host
  user: process.env.DB_USER,
  port: process.env.DB_PORT,
  password: process.env.DB_PASSWORD,
})
  .then((database) => {
    app.set("database", database);
    console.log("Connected to Remote Database");

    module.exports = database; // ask greg why we did this
  })
  .catch((error) => {
    console.log(error);
  });

//establish connection
app.listen(PORT, () => {
  try {
    console.log(`server started on port ${PORT} `);
  } catch (error) {
    console.log(error);
  }
});

// //generate URL for each endpoint using the version and path strings passed in

// server.use(morgan("tiny")); //middleware dependency
// server.use(bodyparser.json()); // data in the body in json format

// server.use(constructURL("v1", "animals"), AnimalRoute); // tell the serever that requests with the following url
// // (/api/v1/animals) are to be routed to the Animal router file where the endpoints were declared. The router file was imported at the top
