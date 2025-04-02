# Bakend_DataModeling_Practice

*  Backend Data Modeling with Express.js

# Overview

This document provides a structured guide for implementing backend data modeling using Express.js, including database schema design, API endpoints, and best practices for managing data effectively.

Technologies Used

* Node.js - JavaScript runtime environment

* Express.js - Web framework for Node.js

* MongoDB - NoSQL database

* Mongoose - ODM (Object Data Modeling) for MongoDB

* Postman - API testing tool

# Defining Data Models
This application consists of three data models: User, Todo, and Subtodo.

# User Model
Defines user details with unique constraints on username and email.

* Example: models/User.js

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
},{
    timestamps:true
  })

export const User = mongoose.model("User", userSchema)


# Todo Model
Defines tasks with references to the User and Subtodo models.

* Example: models/Todo.js

import mongoose from "mongoose";

let todoSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true

    },
    complete: {
        type: Boolean,
        default: false,
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"

    },
    subTodos: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Subtodo"
        }
    ]

}, {
    timestamps: true
})

export let Todo = mongoose.model("Todo", todoSchema)


# Subtodo Model
Defines subtasks associated with a Todo and created by a User.

* Example: models/Subtodo.js

import mongoose from "mongoose"

let subTodoSchema= new mongoose.Schema({
content:{
    type:String,
    require:true,

},
complete:{
    type:Boolean,
    default: false
},
createdBy:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User"
}

},{timestamps:true})

const Subtodo = mongoose.model("Subtodo",subTodoSchema)
