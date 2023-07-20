import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../../entities';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  async createUser(email: string, password: string): Promise<User> {
    const user = this.userRepository.create({ email, password });
    return this.userRepository.save(user);
  }

  async findOneUser(email: string): Promise<User | undefined> {
    return this.userRepository.findOne({ where: { email } });
  }

  async getAllUsers(): Promise<User[] | undefined> {
    return this.userRepository.find({});
  }
}
