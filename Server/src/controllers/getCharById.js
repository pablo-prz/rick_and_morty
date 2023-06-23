const axios = require("axios");

async function getCharById(req, res) {
    try {
  const { id } = req.params;

  const { data } = await axios(`https://rickandmortyapi.com/api/character/${id}`); 

  const character =  {
    id: data.id,
    name: data.name,
    species: data.species,
    gender: data.gender,
    status: data.status,
    origin: data.origin.name,
    image: data.image,
  };
  
  character.name
  ? res.status(200).json(character)
  : res.status(404).send("Not found");
    }
    catch(error){
        res.status(500).json({message: error.message})
    };

};

module.exports = getCharById;
