// /**
//  * @Description : These are the different routes that are available for accessing, modifying and deleting Animals from the database
//  */

// import express from "express";

// import _ from "lodash";

// const router = express.Router();

// /**Get all animals
//  *Request Type : GET
//  * URL : http://localhost:3000/api/v1/list_animals
//  */
// router.get("/", (req, response) => {
//   dbQuery.query("SELECT * FROM animals").then((res) => {
//     response.send(JSON.stringify(res.rows));
//   });
// });

// /*Get animal by id (using a URL parameter)
//  * Request Type : GET
//  * URL : http://localhost:3000/api/v1/animals/<animal_id>
//  */
// router.get("/:id", (req, response) => {
//   const animal_id = req.params.id;

//   dbQuery
//     .query("SELECT * FROM animals WHERE ID = $1", [animal_id])
//     .then((res) => {
//       res
//         ? res.rowCount > 0
//           ? response.send(JSON.stringify(res.rows))
//           : response.send("Animal Does not exist")
//         : res.send("Resource Error");
//     });
// });

// /*update animal by id (using request params)
//  * Request Type : POST
//  * URL : http://localhost:3000/api/v1/animals
//  */
// router.post("/", (req, response) => {
//   if (_.isEmpty(req.body)) {
//     //if no data was provided in the body,
//     response.send("No data provided in the body");
//     response.end();
//   }

//   dbQuery
//     .query(
//       "UPDATE animals SET animal_name = $1, animal_type = $2 , animal_age = $3  WHERE ID = $4",
//       [req.body.name, req.body.type, req.body.age, animal_id]
//     )
//     .then((res) => {
//       res
//         ? res.rowCount > 0
//           ? response.send(JSON.stringify(res.rows))
//           : response.send("Animal Does not exist")
//         : res.send("Resource Error");
//     });
// });

// /*add a new animal (using request params)
//  * Request Type : PUT
//  * URL : http://localhost:3000/api/v1/animals
//  */
// router.put("/", (req, response) => {
//   response.end();
// });

// //remove an animal
// router.delete("/", (req, response) => {
//   console.log("delete_Request");
//   response.end();
// });

// router.param("id", (req, res, next, id) => {
//   isNaN(id) ? next(`Invalid parameter data type : ${id}`) : next();
// });

// module.exports = router;
