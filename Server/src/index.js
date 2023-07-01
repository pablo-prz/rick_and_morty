const { conn } = require('./DB_connection');
const server = require("./app");
const PORT = 3001;

server.listen(PORT, () => {
  conn.sync({ force: true });
  console.log("Server is raised in port " + PORT);
});


