import { Injectable } from '@angular/core';
import { ITagState } from "app/services/tag.models";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { UsersService } from "app/services/users.service";
import { GroupsService } from "app/services/groups.service";
import { LessonsService } from "app/services/lessons.service";

@Injectable()
export class TagstateService implements ITagState {

  $subject: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  $grade: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  $curriculum: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  $user: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  $lesson: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);

  constructor(private _usersrvc: UsersService,
    private _groupsrvc: GroupsService,
    private _lessonsrvc: LessonsService) {

    this._usersrvc.users.subscribe((newListOfUsers) => {

    });

  }

  addTags(tag: any) {
    var currentValue = this.$subject.getValue();
    console.info("Previous Value");
    console.log(currentValue);
    currentValue = currentValue.concat([tag]);
    console.info("Current Value");
    console.log(currentValue);
    this.$subject.next(currentValue);
  }

  removeTags(tag: any){

    var currentValue = this.$subject.getValue();
    currentValue = currentValue.filter((item) => {
      return item.tagId !== tag.tagId;
    });
    this.$subject.next(currentValue);

  }




}
