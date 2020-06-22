var Animals = require("../../AnimalData/data.json")
async function getAnimals (req,res){

    try{

        res.status(200).send(Animals)

    }catch(error){
        console.log(error)

        res.send(error).status(500)
    }


    //validate data here

    //run operations


    //return and send result
}


module.exports = getAnimals

//export the function