let myFavorites = [];

const postFav = (req, res) => {
  const favorite = req.body;

  myFavorites.push(favorite);

  res.status(200).json(myFavorites);
}

const deleteFav = (req, res) => {
  const { id } = req.params;

  const filtered = myFavorites.filter(
    (character) => character.id !== Number(id)
  );

  myFavorites = filtered;

  res.status(200).json(filtered);
};

module.exports = { postFav, deleteFav };
