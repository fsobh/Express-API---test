// import Animal controller functions here

const getAllAnimals = require("../ControllerFunctions/AnimalFunctions/getAnimals")
const getAnimalByID = require("../ControllerFunctions/AnimalFunctions/getAnimalById")
const changeAnimalDetails = require("../ControllerFunctions/AnimalFunctions/changeAnimalDetails")


//define the functions to call per controller function // 
const animalController = {

    getAnimals : getAllAnimals,
    getAnimalById : getAnimalByID,
    changeAnimalDetails : changeAnimalDetails

}

module.exports = animalController;

//export the session controller along with its functions



