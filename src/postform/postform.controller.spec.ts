import { Test, TestingModule } from '@nestjs/testing';
import { PostformController } from './postform.controller';

describe('PostformController', () => {
  let controller: PostformController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PostformController],
    }).compile();

    controller = module.get<PostformController>(PostformController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
