import { Injectable, Input } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { BehaviorSubject } from "rxjs";

@Injectable()
export class MyNewServiceService {

  constructor() {

  }

  _firstName: string;
  _lastName: string;
  
  $address: BehaviorSubject<string> = new BehaviorSubject<string>("");

  get firstName() {
    return this._firstName;
  }
  set firstName(value) {
    this._firstName = value;
  }

  get lastName() {
    return this._lastName;
  }
  set lastName(value) {
    this._lastName = value;
  }

  get address(){
    return this.$address.getValue();
  }
  set address(value){
    this.$address.next(value);
  }




}
