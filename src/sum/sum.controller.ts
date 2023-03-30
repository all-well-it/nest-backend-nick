import { Body, Controller, Post } from '@nestjs/common';
import { SumService } from './sum.service';

@Controller('sum')
export class SumController {
  constructor(private readonly sumService: SumService) {}

  @Post()
  getSum(@Body(){number1, number2}): number {
    return this.sumService.getSum({number1, number2});
  }
}