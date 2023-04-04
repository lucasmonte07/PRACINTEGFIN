import {Schema, model} from 'mongoose';

const prodCollection = "products" // nombre de la colección

const prodSchema = new Schema({
    title: String, 
    description: String,
    code: String,
    price: Number,
    status: String,
    stock: Number,
    category: String,
    thumbnail: String
}) 

export const prodModel = model(prodCollection, prodSchema)
