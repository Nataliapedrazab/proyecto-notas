const express = require("express")

const holaRoutes = require("./routes/HolaMundo")
const notasRoues = require("./routes/notas")

//creando una instancia, hagan de cuenta una copia
const app = express()
const port = 3006

app.set("port",port)

app.use(express.json())

app.use("/api/hola",holaRoutes)
app.use("/api/notas/12234",notasRoues)


app.listen(port,()=>{
    console.log(`Escuchando el puerto ${port}`)
})
