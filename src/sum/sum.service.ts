import { Injectable } from '@nestjs/common';

@Injectable()
export class SumService {
  getSum({number1,number2}): number {
    return  number1 + number2;
  }
}