import mongoose from "mongoose";

let patientSchema= new mongoose.Schema({
    name:{
        type:String,
        require:true,
    },
    age:{
        type:number,
        require:true,
    },
    gender:{
        type:String,
        require:true,
        enum:["M","F","O"]
    },
    bloodGroup:{
        type:String,
        require:true
    },
    adimitedIn :{
        type:mongoose.Schema.type.ObjectId,
        ref:"Hospita"
    }
},{timestamps})

export let Patient = mongoose.model("Patient",patientSchema)