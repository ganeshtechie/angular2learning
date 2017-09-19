import { Component, OnInit } from '@angular/core';
import { MyNewServiceService } from "app/services/my-new-service.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  service: MyNewServiceService;

  constructor(public _service: MyNewServiceService) { 

    this.service = _service;

  }

  ngOnInit() {

  }

}
