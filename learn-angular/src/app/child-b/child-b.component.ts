import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child-b',
  templateUrl: './child-b.component.html',
  styleUrls: ['./child-b.component.css']
})
export class ChildBComponent implements OnInit {

  @Input () childBProperty;
  @Output () sendRequestToData = new EventEmitter();

  constructor() { }

  ngOnInit() {
    // console.log('child-b',this.childBProperty);
  }

  sendEvent() {
    this.sendRequestToData.emit(

   "Bonjour Papa :)"
    );
  }

}
