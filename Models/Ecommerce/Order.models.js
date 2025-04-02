import mongoose, { mongo } from "mongoose";
import { Product } from "./Product.models";

let orderItemsSchema=new mongoose.Schema({
    productId:{
        type:mongoose.Schema.type.ObjectId,
        ref:"Producd"
    },
    quantity:{
        type:Number,
        required:true,
    }
});


let orderSchema =new mongoose.Schema({
    orderPrice:{
        type:String,
        required:true,
    },
    customer:{
        type:mongoose.Schema.type.ObjectId,
        ref:'User',

    },
    orderItems:{
        type:[orderItemsSchema]
    },
    address:{
        type:String,
        required:true,
    },
    status:{
     type:String,
     enum:["pending","cancelled","deleverd"],
     default:"panding"
    }
},{timestamps:true});

export let Order= mongoose.model('Order',orderSchema)