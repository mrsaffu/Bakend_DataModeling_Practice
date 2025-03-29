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