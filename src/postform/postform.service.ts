
import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PostDto } from 'src/entities/post.entity';
import { Repository } from 'typeorm';
import { UserService } from 'src/user/user.service';

@Injectable()
export class PostformService {

 constructor(
    @InjectRepository(PostDto) private userRepository: Repository<PostDto>,
    
    @Inject(forwardRef(() => UserService))
    private readonly userService: UserService,

  ) 
  {
      
  }
  async createPost(user: PostDto): Promise<PostDto> {
    return this.userRepository.save(user);
  }
  async findAll(): Promise<PostDto[]> {
    return this.userRepository.find({relations: ['user']});
  }
  async findOne(id: number): Promise<PostDto> {
    return this.userRepository.findOne(id);
  }

  async update(id: number, user: PostDto) {
    return this.userRepository.update(id, user);
  }

  async deleteOne(id: number) {
    return this.userRepository.delete(id);
  }

}
