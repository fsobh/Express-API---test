// import Animal controller functions here

const getAllAnimals = require("../ControllerFunctions/AnimalFunctions/getAnimals")
const getAnimalByID = require("../ControllerFunctions/AnimalFunctions/getAnimalById")
const changeAnimalDetails = require("../ControllerFunctions/AnimalFunctions/changeAnimalDetails")
const deleteAnimal = require("../ControllerFunctions/AnimalFunctions/deleteAnimal")
const addAnimal = require("../ControllerFunctions/AnimalFunctions/addAnimal")

//define the functions to call per controller function // 
const animalController = {

    getAnimals : getAllAnimals,
    getAnimalById : getAnimalByID,
    changeAnimalDetails : changeAnimalDetails,
    deleteAnimal : deleteAnimal,
    addAnimal : addAnimal

}

module.exports = animalController;

//export the session controller along with its functions



