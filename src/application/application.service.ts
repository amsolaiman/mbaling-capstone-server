import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ApplicationDto } from './application.entity';
@Injectable()
export class ApplicationService {
  constructor(
    @InjectRepository(ApplicationDto) private applicationRepository: Repository<ApplicationDto>,
  ) {}
  async create(application: ApplicationDto): Promise<ApplicationDto> {
    return this.applicationRepository.save(application);
  }
  async findAll(): Promise<ApplicationDto[]> {
    return this.applicationRepository.find({relations: ['landlord', 'student']});
  }
  async findOne(id: number): Promise<ApplicationDto> {
    return this.applicationRepository.findOne(id);
  }
  async update(id: number, application: ApplicationDto) {
    return this.applicationRepository.update(id, application);
  }
  async deleteOne(id: number) {
    return this.applicationRepository.delete(id);
  }
}
