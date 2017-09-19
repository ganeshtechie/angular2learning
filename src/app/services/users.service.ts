import { Injectable } from '@angular/core';
import { ITagState, ITagService } from "./tag.models";
import { BehaviorSubject } from "rxjs/BehaviorSubject";

@Injectable()
export class UsersService implements ITagService {

  constructor() { }

  state: ITagState;
  
  users: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  

  watch(_state: ITagState){

    console.log("users service watching subject state");

    this.state = _state;

    this.state.$subject.subscribe(this.searchForNewUsers.bind(this));
    this.state.$grade.subscribe(this.searchForNewUsers.bind(this));
    this.state.$curriculum.subscribe(this.searchForNewUsers.bind(this));
  }

  searchForNewUsers(){
    
    var subjects = this.state.$subject.getValue();
    var grade = this.state.$grade.getValue();
    var curriculum = this.state.$curriculum.getValue();


    // get all the ID's and fetch the new users list
    // update the users collection

    

    

  }


}
