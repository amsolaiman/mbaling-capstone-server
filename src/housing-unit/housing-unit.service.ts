import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { HousingDto } from './housing.entity';

@Injectable()
export class HousingUnitService {

    constructor(
        @InjectRepository(HousingDto) private housingRepository: Repository<HousingDto>,
      ) {
          
      }

      async createPost(user: HousingDto): Promise<HousingDto> {
        return this.housingRepository.save(user);
      }
      async findAll(): Promise<HousingDto[]> {
        return this.housingRepository.find({relations: ['user']});
      }
      async findById(id: number): Promise<HousingDto> {
        return this.housingRepository.findOne(id);
      }

      async update(id: number, user: HousingDto) {
        return this.housingRepository.update(id, user);
      }
}
