import mongoose from "mongoose";

let doctorSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,

    },
    salary:{
        type:String,
        required:true
    },
    yearOfExperience:{
        type:Number,
        required:true,
        default:0

    },
    worksInHospital:[{
        type: mongoose.Schema.type.ObjectId,
        ref:"Hospital"
    }]
},{timestamps:true})

export let Doctor = mongoose.model("Doctor",doctorSchema)