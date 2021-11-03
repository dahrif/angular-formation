import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-a',
  templateUrl: './child-a.component.html',
  styleUrls: ['./child-a.component.css']
})
export class ChildAComponent implements OnInit {

  color= 'white';

  constructor() { }

  ngOnInit() {
  }

  changeColor(input){
    this.color = input.value
    input.value = "";
  }

}
