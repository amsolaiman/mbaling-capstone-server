import { Test, TestingModule } from '@nestjs/testing';
import { PrfmediaController } from './prfmedia.controller';

describe('PrfmediaController', () => {
  let controller: PrfmediaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PrfmediaController],
    }).compile();

    controller = module.get<PrfmediaController>(PrfmediaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
