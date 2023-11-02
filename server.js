//dependencias del proyecto
const express = require('express')
const dotenv = require('dotenv')
const colors = require('colors')


//dependencia de conexion:
const conectarDB= require("./config/db")


//configurar dontenv 
dotenv.config({
    path: "./config/.env"
})

//conectar a base de dattos 
conectarDB()


//dependencias de rutas
const bootcampsRoutes = require('./routes/bootcampRoutes')

//crear el objeto express
const app = express()

//habilitar express para recivir body en formato json
app.use(express.json())

//estavlecer rutas del projecto
app.use('/api/v1/bootcamps',bootcampsRoutes )

//crar el servidor de aplicaciones 

app.listen( process.env.PUERTO, () => { 
    console.log(`servidr ejecutando en el puerto ${process.env.PUERTO}`.bgCyan.yellow.underline)
})