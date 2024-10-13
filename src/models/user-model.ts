import mongoose, { Model, Schema } from "mongoose";

// Define the User interface extending Mongoose document
interface IUser extends Document {
  username: string;
  email: string;
  password: string;
}

// Define User schema
const UserSchema: Schema<IUser> = new Schema({
  username: { type: String, requred: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
});

// Create the User model
const UserModel: Model<IUser> = mongoose.model<IUser>("User", UserSchema);

export { IUser, UserModel };
