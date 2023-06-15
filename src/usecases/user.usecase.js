const bcrypt = require("bcrypt");
const createError = require("http-errors");
const User = require("../models/user.model");
const jwt = require("../lib/jwt.lib");
/**
 * Registro --> Autenticación
 */

const create = async (data) => {
  // cadenas aleatorias
  const saltRounds = 10;
  // hassear la password
  const hasedPassword = await bcrypt.hash(data.password, saltRounds);
  data.password = hasedPassword;

  // crear la cuenta
  const newUser = await User.create(data);
  return newUser;
};

const login = async (email, password) => {
  // Validar que un usuario con ese correo exista
  const user = await User.findOne({ email });
  // Falla correo
  if (!user) throw createError(400, "Invalid data");

  // Validar la password
  const isValidPassword = await bcrypt.compare(password, user.password);
  if (!isValidPassword) throw createError(400, "Invalid data");

  // Si es la password y si es el correo regresamos token

  const token = jwt.sign({ email: user.email, id: user._id });
  console.log("token -->", token);
  return token;
};

module.exports = { create, login };
