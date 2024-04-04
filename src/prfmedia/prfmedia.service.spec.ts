import { Test, TestingModule } from '@nestjs/testing';
import { PrfmediaService } from './prfmedia.service';

describe('PrfmediaService', () => {
  let service: PrfmediaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PrfmediaService],
    }).compile();

    service = module.get<PrfmediaService>(PrfmediaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
