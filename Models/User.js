
import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String
})

const UserModel = mongoose.model('User', UserSchema, 'users');

export default UserModel;
