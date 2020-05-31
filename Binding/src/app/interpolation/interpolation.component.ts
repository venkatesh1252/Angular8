import { Component, OnInit } from '@angular/core';
import { Button } from 'protractor';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.scss'],
  styles: [`
  .ts-text-success{
    color: green;
}

.ts-text-danger{
color: red;
}

.ts-text-font-type{
    font-style: italic;
}
  `]

})

export class InterpolationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  //Interpolation
  public name = "Venkat";

  //property binding START
  public firstName: string = "Venkat";
  public lastName: string = "Kandur";
  disabledSave: boolean;

  saveform() {
    if (this.lastName !== null) {
      return this.disabledSave = false;
    } else {
      return this.disabledSave = true;
    }
    //property binding END
  }

  //Class Binding START
  public classBindindg = "ts-text-danger";
  public hasDanger = false;
  public isSpecial = true;

  public applyMultipleCssClassStyles = {
    "ts-text-success": !this.hasDanger,
    "ts-text-danger": this.hasDanger,
    "ts-text-font-type": this.isSpecial,
  }
  //Class Binding END

  //Event Binding START
  public greeting = ""
  onClick(event) {
    //console.log(event)
    this.greeting = event.type;
  }

  //Event Binding END
}
