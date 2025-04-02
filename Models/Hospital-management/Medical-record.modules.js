import mongoose from "mongoose";

let mecicalRecorSchema = new mongoose.Schema({},{timestamps:true})

export const MedicalRecord = mongoose.model('MedicalRecord',mecicalRecorSchema)