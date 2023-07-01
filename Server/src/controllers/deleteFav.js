const { Favorite } = require("../DB_connection");

async function deleteFav(req, res) {
    const { id } = req.params;
    try {
        await Favorite.destroy({ where: { id: id } });
        const favs = await Favorite.findAll();
        res.status(200).json({ favs });
    } catch (error) {
        res.status(500).json({ message: error.message })
    };
}

module.exports = deleteFav;