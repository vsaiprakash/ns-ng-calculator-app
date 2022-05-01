import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'ns-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  cellColor: string = "#d4d4d4";
  resultColor: string = "#f0f0f0";

  customMargin: string = "2";
  customBorderRadius: string = "30px";

  constructor() {}

  ngOnInit(): void {
  }
}
