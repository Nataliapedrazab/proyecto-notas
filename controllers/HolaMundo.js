exports.holaMundo = async(req,res)=>{
    console.log("estamos en la ruta hola")
    res.send("estamos en la ruta hola")
}

exports.HolaMundoConNombre = (req,res)=>{
    nombre = req.params.nombre
    res.send(`Hola ${nombre}`)
}