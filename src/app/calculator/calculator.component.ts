import { Component, OnInit } from '@angular/core'
import { Button, EventData } from '@nativescript/core';
import stringCalculator from 'string-calculator'

@Component({
  selector: 'ns-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  cellColor1: string = "#e8e8e8";
  cellColor2: string = "#c7c7c7";
  cellColor3: string = "#ababab";
  cellColor4: string = "#949494";

  resultColor: string = "#f0f0f0";
  clearColor: string = "#ff7057";
  equalBtnColor: string = "#5797ff";

  customMargin: string = "2";
  customBorderRadius: string = "30px";

  resultScreen: string = "";

  constructor() {}

  ngOnInit(): void {
  }

  onTap(args: EventData) {
    let button = args.object as Button;
    // execute your custom logic here...
    switch(button.text){
      case 'C':
        this.resultScreen = "";
        break;
      case '=':
        this.resultScreen = stringCalculator(this.resultScreen);
        break;
      case 'x':
        this.resultScreen = this.resultScreen + '*';
        break;
      case '÷':
        this.resultScreen = this.resultScreen + '/';
        break;
      default:
        this.resultScreen = this.resultScreen + button.text;
        break;
    }
}
}
