// import { Injectable } from '@nestjs/common';

// @Injectable()
// export class PrfmediaService {}
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PrfMediaDto } from './prfmedia.dto';

@Injectable()
export class PrfmediaService {
  constructor(
    @InjectRepository(PrfMediaDto) private prfmediaRepository: Repository<PrfMediaDto>,
  ) {}

  async uploadFile(file: Express.Multer.File) {
    const createFile = this.prfmediaRepository.create({
      data: file.buffer,
      filename: file.filename || file.originalname,
      mimeType: file.mimetype,
    });
    return await this.prfmediaRepository.save(createFile);
  }

  async findOne(id: number): Promise<PrfMediaDto> {
    return await this.prfmediaRepository.findOne(id);
  }

  async deleteOne(id: number) {
    return await this.prfmediaRepository.delete(id);
  }
}
export default PrfmediaService;
