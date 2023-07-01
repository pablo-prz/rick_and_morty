const { User } = require("../DB_connection");

async function login(req, res) {

    const { email, password } = req.query;

    try {
        if (!email || !password) {
            return res.status(400).send("Faltan datos")
        }
        else if (email) {
            const responsemail = await User.findOne({ where: { email: email } });
            if (!responsemail) {
                return res.status(404).send("Usuario no encontrado");
            }
            else {
                const responsepass = await User.findOne({ where: { password: password } })
                if (!responsepass) {
                    return res.status(403).send("Contraseña incorrecta");
                }
                else res.status(200).json({ acces: true })
            }
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = login;