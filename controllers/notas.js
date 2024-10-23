exports.obtenerNotas = async(req,res)=>{
    res.send("obtenerNotas")
}

exports.CrearNota = async(req,res)=>{
    notas = req.body
    res.json({notas}).status(201)
}

exports.ObtenerNotaPorId = async(req,res)=>{
    id = req.params.id
    res.send(`obtener nota por id ${id}`)
}

exports.eliminarNota = async(req,res)=>{
    id = req.params.id
    res.send(`eliminar nota ${id}`)
}

exports.editarNota = async (req,res)=>{
    id = req.params.id
    nota = req.body
    res.send(`editarNota ${id}, ${nota.nombreEstudiante}`)
}