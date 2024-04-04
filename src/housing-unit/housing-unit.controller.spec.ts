import { Test, TestingModule } from '@nestjs/testing';
import { HousingUnitController } from './housing-unit.controller';

describe('HousingUnitController', () => {
  let controller: HousingUnitController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HousingUnitController],
    }).compile();

    controller = module.get<HousingUnitController>(HousingUnitController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
