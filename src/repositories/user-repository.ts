import { Model } from "mongoose";
import { IUser, UserModel } from "../models";

class UserRepository {
  private userModel: Model<IUser>;

  constructor() {
    this.userModel = UserModel;
  }

  async findOneByUsername(username: string): Promise<IUser | null> {
    return this.userModel.findOne({ username }).exec();
  }

  async findAll(): Promise<IUser[]> {
    return this.userModel.find().exec();
  }

  async create(user: Partial<IUser>): Promise<IUser> {
    return this.userModel.create(user);
  }

  async updateById(id: string, update: Partial<IUser>): Promise<void> {
    await this.userModel.findByIdAndUpdate(id, update).exec();
  }

  async deleteById(id: string): Promise<void> {
    await this.userModel.findByIdAndDelete(id);
  }
}

export default UserRepository;
