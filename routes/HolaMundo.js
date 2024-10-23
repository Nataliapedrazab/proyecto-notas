const express = require("express")

const router = express.Router()
const holaController = require("../controllers/HolaMundo")

router.get("/",holaController.holaMundo)
    

router.get("/gio",(req,res)=>{
    console.log("hola gio")
    res.send("hola gio")
})

router.get("/jose",(req,res)=>{
    console.log("hola gio")
    res.send("hola jose")
})


module.exports = router