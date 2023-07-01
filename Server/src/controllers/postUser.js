const { User } = require("../DB_connection");

async function postUser(req, res) {
    const { email, password } = req.body;
    try {
        if (!email || !password) {
            res.status(400).send("Faltan datos")
        }
        else {
            const newUser = await User.create({ email, password });
            res.status(200).json(newUser);
        }

    } catch (error) {
        res.status(500).json({ message: error.message })
    }

}

module.exports = postUser;
