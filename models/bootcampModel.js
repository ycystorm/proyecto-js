const mongoose = require('mongoose')

//definir el esquema 
//plano general d todo bootcamp a regustrar 


const bootcampSchema = new mongoose.Schema({
    name:{
        type: String,
        require : [true, "nombre requerido"],
        unique :[true, "nombre repetido"],
    } ,
    phone:{
        type: Number,
        require : [true, "telefono requerido"],
        maxlength: [10, "telefono muy largo"]
    } ,
    address:{
        type: String,
        require : [true, "direccion requerido"],
        maxlength: [50, "direccion muy larga"],
        minlength: [10, "direccion muy corta "],
    },
    topics:{
        type: [String],
        enum: [
                "AI",
                "Backend",
                "Frontend",
                "Devops"
            ]
    },
    createdAt: Date

})

const bootcampModel = mongoose.model("bootcamp", bootcampSchema)

module.exports = bootcampModel