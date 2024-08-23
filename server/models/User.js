import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name : String,
    email: String,
    pass: String
})

const UserModel = mongoose.model("users", UserSchema)
module.exports = UserModel