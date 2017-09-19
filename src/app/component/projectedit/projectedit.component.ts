import { Component, OnInit } from '@angular/core';
import { LessonsService } from "app/services/lessons.service";
import { TagstateService } from "app/services/tagstate.service";
import { UsersService } from "app/services/users.service";
import { GroupsService } from "app/services/groups.service";
import { TagapiService } from "app/services/tagapi.service";

@Component({
  selector: 'app-projectedit',
  templateUrl: './projectedit.component.html',
  styleUrls: ['./projectedit.component.css']
})
export class ProjecteditComponent implements OnInit {

  searchquery: string = "";
  tagApi: TagapiService;
  tagState: TagstateService;
  tags: any[];

  constructor(private _state: TagstateService,
    private _lessons: LessonsService,
    private _users: UsersService,
    private _groups: GroupsService,
    private _tagApi: TagapiService) {

    this.tagApi = this._tagApi;

    this.tagState = this._state;

    this._lessons.watch(this._state);
    this._users.watch(this._state);
    this._groups.watch(this._state);

  }

  ngOnInit() {

  }


  search() {

    var $tags = this.tagApi.search({
      searchText: "",
      categoryId: 3,
      isRemoteSearch: true
    }).subscribe(((result) => {
      console.log(result);
      this.tags = result;
    }).bind(this));

  }

  selectTag(tag){
    this.tagState.addTags(tag);
  }

  removeTag(tag){
    this.tagState.removeTags(tag);
  }


}
