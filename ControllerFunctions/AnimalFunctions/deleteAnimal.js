var Animals = require("../../AnimalData/data.json")
const deleteAnimal = (req, res) => {

    try{



    const index = Animals.findIndex(anim => anim.id == req.params.id);

    index !== undefined ? Animals.splice(index, 1) : res.status(200).send(`Animal with ID ${req.params.id} does Not exist`)

    res.status(200).send(`Animal with ID ${req.params.id} was deleted \n New List : ${JSON.stringify(Animals) }`) 
    
    


}catch(err){
    console.log(err)
    return res.status(500).send(`ID was provided ${JSON.stringify(err) }`)
    
    }
}
module.exports = deleteAnimal