const express = require("express");
const server = require("./app");
const PORT = 3001;

server.listen(PORT, () => {
  console.log("Server is raised in port " + PORT);
});


