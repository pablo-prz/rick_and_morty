const users = require("../utils/users");

const login = (req, res) => {
  const { email, password } = req.query;

  const user = users.find(u => u.email === email && u.password === password);

    const access = user ? true : false;
    res.status(200).json({access});
};

module.exports = login;
