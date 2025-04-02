import mongoose from "mongoose";

let catogrySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true

    },
}, { timestamps: true })

export let Catagory = mongoose.model('Catagory', catogrySchema)