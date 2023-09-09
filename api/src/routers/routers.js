const { Router } = require("express");

const { allDigimos, digimon } = require("../controllers/controlers.js");

const routerDigimons = Router();

routerDigimons.get("/", async (req, res) => {
  try {
    const dataMon = await allDigimos();
    res.status(200).send(dataMon);
  } catch (error) {
    res.status(404).send("error de la base de datos");
  }
});

routerDigimons.get("/:id", async (req, res) => {
  const param = req.params.id;
  try {
    const dataMon = await digimon(param);
    res.status(200).send(dataMon);
  } catch (error) {
    res.status(404).send("error de la base de datos");
  }
});

module.exports = routerDigimons;