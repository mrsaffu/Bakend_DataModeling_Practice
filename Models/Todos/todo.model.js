import mongoose from "mongoose";

let todoSchema = new mongoose.Schema({
    content:{
        type:String,
        required:true
        
    },
    complete:{
        type:Boolean,
        default:false,
    },
    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref: "User"

    },
    subTodos:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Subtodo"
        }
    ]

},{
    timestamps:true
})

export let Todo = mongoose.model("Todo",todoSchema)