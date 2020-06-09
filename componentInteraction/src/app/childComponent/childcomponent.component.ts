import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-childcomponent',
  templateUrl: './childcomponent.component.html',
  styleUrls: ['./childcomponent.component.scss']
})
export class ChildcomponentComponent implements OnInit {
  @Input() parentData;
  @Input() text;
  @Output() childData : EventEmitter<string> = new EventEmitter<string>();

  constructor() { }
  public number :any = 1000000000.12342;
  ngOnInit(): void {
  }

  sendEvent () {
    this.childData.emit('Child Event Fired');
  }

}
