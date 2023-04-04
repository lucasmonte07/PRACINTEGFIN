import {Schema, model} from 'mongoose';

const cartCollection = "cart" // nombre de la colección

const cartSchema = new Schema({
    productos: [{
        codprod: {
            type: Schema.Types.ObjectId,
            ref: 'productos'
        },
        quantity: Number
    }]
}) 

export const cartModel = model(cartCollection, cartSchema)
