import { Injectable } from '@angular/core';
import { UsersService } from "app/services/users.service";
import { GroupsService } from "app/services/groups.service";
import { LessonsService } from "app/services/lessons.service";
import { ITagService } from "app/services/tag.models";
import { Observable } from "rxjs/Observable";

@Injectable()
export class TagapiService {

  userService: ITagService;
  groupService: ITagService;
  lessonService: ITagService;


  constructor(private _users: UsersService, private _groups: GroupsService,
    private _lessons: LessonsService) {

    this.userService = _users;
    this.groupService = _groups;
    this.lessonService = _lessons;

  }


  /**
   * "searchText" => contains the name of the tag we are looking for. 
   * "categoryId" => tells the service, what we are looking for. whether it is a lesson / user / group
   * "isRemoteSearch" => tells the api, whether to look for the tag in database or in-memory.
   */
  search(params: any): Observable<any[]> {

    return this.remoteSearch("", 1);

  }

  remoteSearch(searchText: string, categoryId: number) {

    var observable = Observable.of([
      { tagId: 1, name: "Remote Data - Subject - 1", categoryId: 9 },
      { tagId: 2, name: "Remote Data - Subject - 2", categoryId: 9 },
      { tagId: 3, name: "Remote Data - Subject - 3", categoryId: 9 },
      { tagId: 4, name: "Remote Data - Subject - 4", categoryId: 9 },
      { tagId: 5, name: "Remote Data - Subject - 5", categoryId: 9 }
    ]);

    return observable;

  }

}
