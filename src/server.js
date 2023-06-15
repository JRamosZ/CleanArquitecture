const express = require("express");
const app = express();

// Routers
const routerKoder = require("./routes/koder.route");
const routerMentor = require("./routes/mentor.route");
const routerUser = require("./routes/user.route");
const routerAuth = require("./routes/auth.route");

// Middlewares para toda nuestra api
app.use(express.json());

// Midelwares de rutas
app.use("/koders", routerKoder);
app.use("/mentors", routerMentor);
app.use("/users", routerUser);
app.use("/auth", routerAuth);
/**
 * ---> Aquí se ponen los middlewares (ejecución)
 * ---> Endpoint de home
 * ---> Rutear
 */

// Endpoint de home
app.get("/", (request, response) => {
  response.json("Nuestra API sirve");
});

// Exportar
module.exports = app;
