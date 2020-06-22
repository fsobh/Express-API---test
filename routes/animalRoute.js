
const express = require("express")

const routeController = require("../Controllers/animalController")

const router = express.Router();



router.get("/getAnimals" , routeController.getAnimals)


//route for get by id

router.get("/getAnimal/:id" , routeController.getAnimalById)

router.post("/changeAnimalDetails", routeController.changeAnimalDetails)
//route to delete

//route to add

//export router
module.exports = router