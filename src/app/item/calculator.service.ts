import { Injectable } from '@angular/core'


@Injectable({
  providedIn: 'root',
})
export class CalculatorService {
  result: string;

  calculate(input: string): string {
      
    return input;
  }
}
