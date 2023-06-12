require("dotenv").config(); //lo mas pronto en nuestra aplicación
const express = require("express");
const mongoose = require("mongoose");

const { DB_USERNAME, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;
// Variable de entorno
const dataBaseURL = `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`;

mongoose
  .connect(dataBaseURL)
  .then(() => {
    console.log("We are connected to our database");
  })
  .catch((error) => {
    console.log("We have an error", error);
  });
