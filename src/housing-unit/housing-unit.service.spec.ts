import { Test, TestingModule } from '@nestjs/testing';
import { HousingUnitService } from './housing-unit.service';

describe('HousingUnitService', () => {
  let service: HousingUnitService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HousingUnitService],
    }).compile();

    service = module.get<HousingUnitService>(HousingUnitService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
