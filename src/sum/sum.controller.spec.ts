import { Test, TestingModule } from '@nestjs/testing';
import { SumService } from './sum.service';
import { SumController } from './sum.controller';

describe('SumController', () => {
  let sumController: SumController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [SumController],
      providers: [SumService],
    }).compile();

    sumController = app.get<SumController>(SumController);
  });

  describe('root', () => {
    it('should return number1 + number2', () => {
      expect(sumController.getSum({number1: 12, number2: 6})).toBe(18);
    });
  });
});