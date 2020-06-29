var Animals = require("../../AnimalData/data.json")
const getAnimalByID = (req, res) => {

    try{

    let animal = Animals.find(an => an.id == req.params.id); //thank you ES6
    if (animal) {
        
        return res.status(200).send(JSON.stringify(animal));
  
      }
      else {
        return res.status(200).send(`Animal with ID ${req.params.id} does Not exist`);
    }

}catch(err){
    console.log(err)
    return res.status(500).send(`ID was provided ${JSON.stringify(err) }`)
    
    }
}
module.exports = getAnimalByID