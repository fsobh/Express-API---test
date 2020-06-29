var Animals = require("../../AnimalData/data.json")
const changeAnimalDetails = (req, res) => {

    try{

        if (!req.body || (!req.body.id || !req.body.type)){

          return  res.status(200).send(`No data provided in request`)
        }
        else {

            let animal = Animals.find(an => an.id == req.body.id); //thank you ES6

            if (animal) {

                animal.type = req.body.type
          
                return res.status(200).send(JSON.stringify(Animals));
          
              }
              else {
                return res.status(200).send(`Animal with ID ${req.params.id} does Not exist`);
            }


        }


    


}catch(err){
    console.log(err)
    return res.status(500).send(`ID was provided ${JSON.stringify(err) }`)
    
    }
}
module.exports = changeAnimalDetails