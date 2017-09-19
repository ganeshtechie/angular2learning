import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-multiselect',
  templateUrl: './multiselect.component.html',
  styleUrls: ['./multiselect.component.css']
})
export class MultiselectComponent implements OnInit {

  @Input() prop: any;

  @Input() fieldName: string;

  constructor() { }

  ngOnInit() {
  }

}
