import {Delete, Get, Injectable, Param, Post, Put} from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {UserDto} from "../../dto/user-dto";
import { JwtService } from '@nestjs/jwt';
import { User, UserDocument } from 'src/shemas/user/user';
import * as bcrypt from 'bcrypt';
@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>,
              private jwtService: JwtService) {
  }

  

    async getAllUsers(): Promise<User[]> {
      return this.userModel.find();
    }

    async getUserById (id): Promise<User> {
      return this.userModel.findById(id);
    }
  
    async sendUser(data): Promise<User> {
      const saltOrRounds = 10;
      const password = data.psw;
      const hash = await bcrypt.hash(password, saltOrRounds);
      const salt = await bcrypt.genSalt();

      data.psw = hash;


      const userData = new this.userModel(data);
      return userData.save();
    }
  
    async updateUsers(id: string, body): Promise<User> {
      return this.userModel.findByIdAndUpdate(id, body);
    }
  

    async deleteUsers(): Promise<any> {
      return this.userModel.deleteMany();
    }
 

    async deleteUserById(id: string): Promise<any> {
      return this.userModel.findByIdAndDelete(id);
    }

    async checkAuthUser(login: string, psw: string): Promise<User[]> {
      
      const usersArr = await this.userModel.find({login: login});
      const hash = usersArr[0].psw;
      const isMatch = await bcrypt.compare(psw, hash);

      if (isMatch == true) {
        return usersArr;
      } else {
        return null;
      }
        
      
      
  }

  async checkRegUser(login: string): Promise<User[]> {
      return this.userModel.find({login: login});
  }

  async login(user: UserDto) {
    const payload = {login: user.login, psw: user.psw};
    const userFromDb = await this.userModel.find({login: user.login});
    console.log('userFromDb', userFromDb)
    return {
      id: userFromDb[0]._id,
      access_token: this.jwtService.sign(payload),
    };
  }
}