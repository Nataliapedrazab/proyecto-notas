const express = require("express")
const notasController = require("../controllers/notas")
const routerNotas = express.Router()

routerNotas.get("/",notasController.obtenerNotas)
routerNotas.post("/",notasController.CrearNota)
routerNotas.get("/",notasController.ObtenerNotaPorId)
routerNotas.delete("/",notasController.eliminarNota)
routerNotas.put("/",notasController.editarNota)

module.exports = routerNotas