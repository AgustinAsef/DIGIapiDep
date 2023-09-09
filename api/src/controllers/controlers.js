const axios = require("axios");

const allDigimos = async () => {
  let data = await axios.get(`https://digi-api.com/api/v1/digimon`);
  let dataMon = data.data.content;
  return dataMon;
};

const digimon = async (param) => {
  let infoApi = await axios.get(`https://digi-api.com/api/v1/digimon/${param}`);
  infoApi = infoApi.data;
  infoApi = {
    id: infoApi.id,
    digiName: infoApi.name || "no encontrado",
    img: infoApi.images || "no encontrado",
    description: infoApi.descriptions || "no encontrado",
    skills: infoApi.skills || "no encontrado",
    level: infoApi.levels.level || "no encontrado",
    type: infoApi.types.type || "no encontrado",
    atributes: infoApi.atributes || "no encontrado",
    fields: infoApi.fields || "no encontrado",
    evolutions: infoApi.nextEvolutions || "no encontrado",
  };
  if (infoApi.description[0].language == "en_us") {
    infoApi.description = infoApi.description[0].description;
  } else {
    infoApi.description = "no encontrado";
  }
  return infoApi;
};

module.exports = {
  allDigimos,
  digimon,
};
