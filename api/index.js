const express = require("express");
const cors = require("cors"); // Importa el módulo cors
const routerDigimons = require("./src/routers/routers.js");

const app = express();

const PORT = process.env.PORT || 3030;

app.use(express.json());

app.use(cors());

app.use("/api/digimons", routerDigimons);

app.listen(PORT, () => {
  console.log(`Escuchando en el puerto: ${PORT}`);
});