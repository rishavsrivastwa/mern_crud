import { Schema, model } from 'mongoose'

const UserSchema = new Schema({
    name: String,
    email: String,
    age: Number
})

const UserModel = model("Users", UserSchema)
export default UserModel