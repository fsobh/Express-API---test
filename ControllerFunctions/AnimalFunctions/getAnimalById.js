var Animals = require("../../AnimalData/data.json")
const getAnimalByID = (req, res) => {

    try{

    let animal = Animals.find(an => an.id == req.params.id); //thank you ES6
 
    animal === undefined ? res.status(200).send(`Animal with ID ${req.params.id} does Not exist`) : res.status(200).send(`ID provided ${req.params.id} \n ${JSON.stringify(animal) }`) 
    


}catch(err){
    console.log(err)
    return res.status(500).send(`ID was provided ${JSON.stringify(err) }`)
    
    }
}
module.exports = getAnimalByID