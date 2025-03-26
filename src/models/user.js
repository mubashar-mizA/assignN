import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: { type: string, required: true, trim: true },
    email: { type: string, required: true, trim: true },
    password: { type: string, required: true, trim: true },
}, { timestamps: true })

const userModel = mongoose.Model.usermodel || mongoose.model('usermodel', userSchema)

export default userModel
