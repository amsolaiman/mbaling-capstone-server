import { Test, TestingModule } from '@nestjs/testing';
import { NonAccountService } from './non-account.service';

describe('NonAccountService', () => {
  let service: NonAccountService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NonAccountService],
    }).compile();

    service = module.get<NonAccountService>(NonAccountService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
