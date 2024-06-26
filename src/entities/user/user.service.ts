import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { genSalt, hash } from 'bcrypt';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  public async createUser(userData: any) {
    const salt = await genSalt(10);
    const hashedPassword = await hash(userData.password, salt);
    const newUser = this.userRepository.create({
      ...userData,
      password: hashedPassword,
    });
    return await this.userRepository.save(newUser);
  }

  public async getUserData(id: number): Promise<User> {
    return await this.userRepository.findOne({ where: { id } });
  }

  public async getaAllUsers(page: number, limit: number): Promise<User[]> {
    const skip = (page - 1) * limit;

    return this.userRepository.find({ skip, take: limit });
  }
}
