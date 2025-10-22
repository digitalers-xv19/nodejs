import { Schema, model } from "mongoose";

const Text = { type: String, required: true };

const userSchema = new Schema({
    username: Text,
    password: Text,
    email: Text,
    userData: {
        firstName: String,
        lastName: String,
        address: {
            type: Object,
            street: String,
            number: String,
            zipcode: String,
        }
    }
})

export const userModel = model('users', userSchema)