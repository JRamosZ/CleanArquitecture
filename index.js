require("dotenv").config(); //lo mas pronto en nuestra aplicación
const mongoose = require("mongoose");
const app = require("./src/server");

const { DB_USERNAME, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;
// Variable de entorno
const dataBaseURL = `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`;

mongoose
  .connect(dataBaseURL)
  .then(() => {
    console.log("We are connected to our database");
    app.listen(8080, () => {
      console.log("Nuestra API de clean arquitecture está prendida");
    });
  })
  .catch((error) => {
    console.log("We have an error", error);
  });
