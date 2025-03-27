import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true },
    message: { type: String, required: true, trim: true },
}, { timestamps: true })

const contactModel =  mongoose.model('contactmodel', contactSchema);


export default contactModel
