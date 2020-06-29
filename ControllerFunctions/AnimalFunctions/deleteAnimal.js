var Animals = require("../../AnimalData/data.json");
const deleteAnimal = (req, res) => {
  try {
    const index = Animals.findIndex((anim) => anim.id == req.params.id);

    if (index > -1) {

      Animals.splice(index, 1)

      return res.status(200).send(JSON.stringify(Animals));

    }
    else {
      return res.status(200).send(`Animal with ID ${req.params.id} does Not exist`);
  }

    
  } catch (err) {
    console.log(err);
    return res.status(500).send(`ID was provided ${JSON.stringify(err)}`);
  }
};
module.exports = deleteAnimal;
