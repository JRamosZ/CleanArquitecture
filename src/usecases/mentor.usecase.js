const Mentor = require("../models/mentor.model");

// Crear mentor
const create = (data) => {
  const mentor = Mentor.create(data);
  return mentor;
};

// Enlistar mentors
const list = (filters) => {
  const filteredMentors = Mentor.find(filters);
  return filteredMentors;
};

// Delete mentor
const deleteM = (id) => {
  const mentor = Mentor.findByIdAndDelete(id);
  return mentor;
};

// Get mentor by Id
const getById = (id) => {
  const mentor = Mentor.findById(id);
  return mentor;
};

// Update mentor

const update = async (id, data) => {
  const mentor = await Mentor.findOne({ _id: id });
  for (let key in data) {
    if (key !== "generations") {
      mentor[key] = data[key];
    }
  }

  if (data.generations) {
    mentor.generations.forEach((generation) => {
      generation.isActive = false;
    });

    mentor.generations.push({ ...data.generations, isActive: true });
  }

  const updatedMentor = Mentor.findByIdAndUpdate(id, mentor, {
    returnDocument: "after",
  });
  return updatedMentor;

  //   let newMentor = mentor;

  //   for (let key in data) {
  //     if (key !== "generations") {
  //       newMentor[key] = data[key];
  //     }
  //   }

  //   if (data.generations) {
  //     const newGenerations = newMentor.generations.map((generation) => {
  //       return {
  //         name: generation.name,
  //         isActive: false,
  //       };
  //     });
  //     newGenerations.push({
  //       name: data.generations.name,
  //       isActive: true,
  //     });
  //     newMentor.generations = newGenerations;
  //   }
  //   const updatedMentor = Mentor.findByIdAndUpdate(id, newMentor, {
  //     returnDocument: "after",
  //   });

  //   return updatedMentor;
};

// Exportamos
module.exports = { create, list, deleteM, update, getById };
