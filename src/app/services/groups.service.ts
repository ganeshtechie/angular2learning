import { Injectable } from '@angular/core';
import { ITagService, ITagState } from "app/services/tag.models";

@Injectable()
export class GroupsService implements ITagService {

  state: ITagState;
  users: any[] = [];

  watch(_state: ITagState){
    this.state = _state;
    this.state.$subject.subscribe(this.searchForNewUsers);
    this.state.$grade.subscribe(this.searchForNewUsers);
    this.state.$curriculum.subscribe(this.searchForNewUsers);
  }

  searchForNewUsers(){
    console.log("subject / grade / curriculum modified !!!");
  }

  constructor() { }

}
