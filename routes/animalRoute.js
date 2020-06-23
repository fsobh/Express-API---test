
const express = require("express")

const routeController = require("../Controllers/animalController")

const router = express.Router();


//get all animals
router.get("/getAnimals" , routeController.getAnimals)
// get animal by id
router.get("/getAnimal/:id" , routeController.getAnimalById)
//delete animal
router.get("/deleteAnimal/:id" , routeController.deleteAnimal)
//edit animal
router.post("/changeAnimalDetails", routeController.changeAnimalDetails)
//add animal
router.post("/addAnimal", routeController.addAnimal)


//export router
module.exports = router