import mongoose from "mongoose";
import { userI } from "../interfaces/user.interface";

const UserSchema = new mongoose.Schema<userI>({
    id: { type: String, required: true },
    secureID: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    admin: { type: Boolean, default: false },
    createdAt: { type: Date, default: new Date() },
});

export default mongoose.model("User", UserSchema);
