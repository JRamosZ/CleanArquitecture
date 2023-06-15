const koderModel = require("../models/koder.model");
const Koder = require("../models/koder.model");

/**
 * Crear
 * Actualizar,
 * Obtener,
 * Enlistar
 * Eliminar
 */

// Enlistar koders
const list = () => {
  // Accion -> use case;
  const koders = Koder.find();
  return koders;
};

const getById = (id) => {
  const koder = Koder.findById(id);
  return koder;
};

const create = (data) => {
  const koder = Koder.create(data);
  return koder;
};

const update = (id, data) => {
  const options = { returnDocument: "after" };
  const koder = Koder.findByIdAndUpdate(id, data, options);
  return koder;
};

const deleteK = (id) => {
  const koder = Koder.findByIdAndDelete(id);
  return koder;
};
module.exports = { list, getById, create, update, deleteK };
// Crear koder
// Actualizar koder
// Eliminar koder
