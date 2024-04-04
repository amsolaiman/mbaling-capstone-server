import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { NonAccountDto } from './non-account.entity';
@Injectable()
export class NonAccountService {
  constructor(
    @InjectRepository(NonAccountDto) private applicationRepository: Repository<NonAccountDto>,
  ) {}
  async create(application: NonAccountDto): Promise<NonAccountDto> {
    return this.applicationRepository.save(application);
  }
  async findAll(): Promise<NonAccountDto[]> {
    return this.applicationRepository.find();
  }
  async findOne(id: number): Promise<NonAccountDto> {
    return this.applicationRepository.findOne(id);
  }
  async update(id: number, application: NonAccountDto) {
    return this.applicationRepository.update(id, application);
  }
  async deleteOne(id: number) {
    return this.applicationRepository.delete(id);
  }
}
