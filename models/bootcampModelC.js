const { string } = require('i/lib/util')
const mongoose = require('mongoose')

//definir el esquema
//plano general d todo bootcamp a regustrar


const bootcampSchema = new mongoose.Schema({
    title :{
        type: String,
        required : [true, "Campo Requerido "],
        max: [30, "Máximo 30 caracteres"],
        minlength: [10, "Mínimo 10 caracteres"],
    } ,
    description:{
        type: String,
        required : [true, "Campo requerido"],
        minlength: [10, "Mínimo 10 caracteres"]
    } ,
    weeks:{
        type: Number,
        required: [true, "requerido"],
        max: [9, "El número máximo de semanas para un curso es 9 "]
    },
    enroll_cost:{
        type: Number,
        required : [true, "requerido"],
    },tminimum_skill :{
        type: [String],
        enum: [
                "Beginner",
                "Intermediate",
                "Advanced",
                "Expert"
            ]
    },


})





const bootcampModelC = mongoose.model("courses", bootcampSchema)

module.exports = bootcampModelC