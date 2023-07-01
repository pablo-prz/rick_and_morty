const { Favorite } = require("../DB_connection");

async function postFav(req, res) {
    const { name, origin, status, image, species, gender } = req.body;

    try {

        if (!name || !origin || !status || !image || !species || !gender) {
            res.status(401).send("Faltan datos")
        } else { await Favorite.create({ name, origin, status, image, species, gender }) };

        const favs = await Favorite.findAll()
        return res.status(200).json({ favs })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }

}

module.exports = postFav;