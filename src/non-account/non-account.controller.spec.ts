import { Test, TestingModule } from '@nestjs/testing';
import { NonAccountController } from './non-account.controller';

describe('NonAccountController', () => {
  let controller: NonAccountController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NonAccountController],
    }).compile();

    controller = module.get<NonAccountController>(NonAccountController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
