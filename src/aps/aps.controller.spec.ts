import { Test, TestingModule } from '@nestjs/testing';
import { ApsController } from './aps.controller';
import { ApsService } from './aps.service';

describe('ApsController', () => {
  let controller: ApsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ApsController],
      providers: [ApsService],
    }).compile();

    controller = module.get<ApsController>(ApsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
