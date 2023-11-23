const mongoose = require('mongoose')

//definir el esquema
//plano general d todo bootcamp a regustrar


const bootcampSchema = new mongoose.Schema({
    name:{
        type: String,
        required : [true, "nombre requerido"],
        unique :[true, "nombre repetido"],
    } ,
    phone:{
        type: Number,
        required : [true, "telefono requerido"],
        max: [99999999, "telefono muy largo"]
    } ,
    address:{
        type: String,
        required : [true, "direccion requerido"],
        max: [50, "direccion muy larga"],
        minlength: [10, "direccion muy corta "],
    },
    topics:{
        type: [String],
        enum: [
                "sena",
                "Backend",
                "Frontend",
                "Devops"
            ]
    },
    createdAt: Date

})





const bootcampModel = mongoose.model("bootcamp", bootcampSchema)

module.exports = bootcampModel