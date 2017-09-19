import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { UserComponent } from './component/user/user.component';
import { MyNewServiceService } from "app/services/my-new-service.service";
import { ListenerService } from "app/services/listener.service";
import { TogglebuttonComponent } from './component/togglebutton/togglebutton.component';
import { ProjecteditComponent } from './component/projectedit/projectedit.component';


import { UsersService } from "app/services/users.service";
import { GroupsService } from "app/services/groups.service";
import { LessonsService } from "app/services/lessons.service";
import { TagstateService } from "app/services/tagstate.service";
import { TagapiService } from "app/services/tagapi.service";
import { MultiselectComponent } from './component/multiselect/multiselect.component';
import { TagService } from "app/services/tag/tags.service";
import { TagsearchComponent } from './component/tagsearch/tagsearch.component';
import { TagfilterComponent } from './component/tagfilter/tagfilter.component';
import { TagsearchgroupComponent } from './component/tagsearchgroup/tagsearchgroup.component';
import { UsergroupsearchComponent } from './component/usergroupsearch/usergroupsearch.component';


var providers = [ TagstateService, LessonsService, GroupsService, UsersService, TagapiService, TagService ];

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    ProjecteditComponent,
    TogglebuttonComponent,
    MultiselectComponent,
    TagsearchComponent,
    TagfilterComponent,
    TagsearchgroupComponent,
    UsergroupsearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ MyNewServiceService, ListenerService, ...providers ],
  bootstrap: [AppComponent]
})
export class AppModule { }
