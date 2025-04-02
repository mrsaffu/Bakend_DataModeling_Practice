import mongoose from "mongoose"
import mogoose, { mongo } from "mongoose"

let userSchema = new mongoose.Schema({
    username: {
        type: String,
        requred: true,
        isActive: false,
        unique: true,
        lowercase: true
    },
    email: {
        type: String,
        requred: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        requred: [true, "Password required"]

    },

}, {
    timestamps: true
})

export const User = mongoose.model("User", userSchema)