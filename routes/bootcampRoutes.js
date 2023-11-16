const express = require('express')
const bootcampModel = require('../models/bootcampModel')
const mongoose = require('mongoose')
//const { default: mongoose, default: mongoose } = require('mongoose')

//definir ruteador
const router = express.Router()



//definir rutas para bootcamps
//con el ruteador

router.get('/', async (req , res) =>{

    //seleccionar todos los bootcamps
    //bootcamps en la coleccion

    try {s
        const bootcamps =
        await bootcampModel.find()

        if(bootcamps.length === 0 ){
            res.
            status(400).json({
                success: false,
                msg: "no hay bootcamps en la cola "
            })
         }else{
            res.
                status(200).json({
                success: true,
                data: bootcamps 
                })
         }
    } catch (error) {
       
    }
})

//seleccionar bootcamp por id
router.get('/:id', async (req , res) => {

    try{

         //recoger el parametro id de la url
    bootcampid =  req.params.id
    //validar el id suministrado
    if(!mongoose.Types.ObjectId.isValid(bootcampid)){
        res.status(400).json({
            success: false,
            msg: "el id no es valido"
        })
    }
    //seleccionar el botcamp por id
    selected_bootcamp = await bootcampModel.
                    findById(bootcampid)
   
    if(selected_bootcamp){
        //se encontro el bootcamp
          //enviar respuesta
    res.status(200).json({
            success : true,
            results: selected_bootcamp
        })
    }else{
        //no se encontro el bootcamp
    res.status(400).json({
            success: false,
            msg: `no se encontro el bootcamp ${bootcampid}`
        })
    }
 

    }   catch (error){
        res.status(error.status).json(
            {
                success: false,
                msg: error.message
           
            })
    }

})




//crear bootcamp
router.post('/', async(req , res ) => {
    const newBootcamp = await bootcampModel.create(req.body)
    res.json({
        success:true,
        result: newBootcamp
    })
})

//exportar rutas

module.exports = router