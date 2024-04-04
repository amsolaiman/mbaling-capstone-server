import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MediaDto } from './media.dto';

@Injectable()
export class MediaService {
  constructor(
    @InjectRepository(MediaDto) private mediaRepository: Repository<MediaDto>,
  ) {}

  async uploadFile(file: Express.Multer.File, id: any) {
    const createFile = this.mediaRepository.create({
      data: file.buffer,
      filename: file.filename || file.originalname,
      mimeType: file.mimetype,
      postPhotoID: id,
    });
    return await this.mediaRepository.save(createFile);
  }

  async update(id: number, file: Express.Multer.File) {
    const createFile = this.mediaRepository.create({
      data: file.buffer,
      filename: file.filename || file.originalname,
      mimeType: file.mimetype,
    });
    return await this.mediaRepository.update(id, createFile);
  }
  async findOne(id: number): Promise<MediaDto> {
    return await this.mediaRepository.findOne(id);
  }

  async deleteOne(id: number) {
    return this.mediaRepository.delete(id);
  }

  async findAll(): Promise<MediaDto[]> {
    return this.mediaRepository.find();
  }
}
export default MediaService;
