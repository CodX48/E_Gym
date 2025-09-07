import mongoose, { Schema, Document } from "mongoose";

export interface IUser extends Document {
    FirstName: string;
    LastName: string;
    Email: string;
    Password: string;
};

const UserSchema = new Schema<IUser>({
    FirstName: { type: String, required: true },
    LastName: { type: String, required: true },
    Email: { type: String, required: true },
    Password: { type: String, required: true },
});

export const User = mongoose.model('User', UserSchema);

