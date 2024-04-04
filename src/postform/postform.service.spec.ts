import { Test, TestingModule } from '@nestjs/testing';
import { PostformService } from './postform.service';

describe('PostformService', () => {
  let service: PostformService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PostformService],
    }).compile();

    service = module.get<PostformService>(PostformService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
