import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
    name: { type: string, required: true, trim: true },
    email: { type: string, required: true, trim: true },
    message: { type: string, required: true, trim: true },
}, { timestamps: true })

const contactModel = mongoose.Model.contactmodel || mongoose.model('contactmodel', contactSchema)

export default contactModel
