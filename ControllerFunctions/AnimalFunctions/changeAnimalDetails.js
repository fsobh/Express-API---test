var Animals = require("../../AnimalData/data.json")
const changeAnimalDetails = (req, res) => {

    try{

        if (!req.body || (!req.body.id || !req.body.type)){

          return  res.status(200).send(`No data provided in request`)
        }
        else {

            let animal = Animals.find(an => an.id == req.body.id); //thank you ES6
 
            animal === undefined ? res.status(200).send(`Animal with ID ${req.body.id} does Not exist`) : animal.type = req.body.type

            res.status(200).send(animal)

        }


    


}catch(err){
    console.log(err)
    return res.status(500).send(`ID was provided ${JSON.stringify(err) }`)
    
    }
}
module.exports = changeAnimalDetails