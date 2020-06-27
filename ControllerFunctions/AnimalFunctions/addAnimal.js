var Animals = require("../../AnimalData/data.json");
const addAnimal = (req, res) => {
  try {
    if (!req.body || !req.body.type || !req.body.name) {
      return res.status(200).send(`No data provided in request`);
    } else {
      Animals.push({
        id: Animals[Animals.length - 1].id + 1,
        type: req.body.type,
        name: req.body.name,
      });
      return res.status(200).send(`${JSON.stringify(Animals)}`);
    }
  } catch (err) {
    console.log(err);
    return res.status(500).send(`ID was provided ${JSON.stringify(err)}`);
  }
};
module.exports = addAnimal;
