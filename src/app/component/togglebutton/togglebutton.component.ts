import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-togglebutton',
  templateUrl: './togglebutton.component.html',
  styleUrls: ['./togglebutton.component.css']
})
export class TogglebuttonComponent implements OnInit {

  @Input() prop: any;
  @Input() fieldName: string;

  constructor() { }

  ngOnInit() {
  }


  toggle(){

    this.prop.selected = !this.prop.selected;

  }
}
