import mongoose from "mongoose";

let hospitalSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    addressLine1: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    pincode: {
        type: String,
        required: true
    },
    splisedIn: [{
        type: String,
        required: true
    }],


}, { timestamps: true });
export let Hospital = mongoose.model('Hospital', hospitalSchema)