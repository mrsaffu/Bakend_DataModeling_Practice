import mongoose from "mongoose";

let productSchema = new mongoose.Schema({
discription:{
    type:String,
    required:true,

},
name:{
    type:String,
    required:true
},
productImage:{
    type:String,

}, 
price:{
    type:Number,
    default:0,

},
stock:{
    type:Number,
    default:0,

},
catagory:{
    type: mongoose.Schema.type.ObjectId,
    ref:"Catagory",
    required:true
},
owner:{
    type:mongoose.Schema.type.ObjectId,
    ref:"User",
}

},{timestamps:true})

export let Product = mongoose.model('Producr',productSchema)