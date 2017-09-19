import { Component } from '@angular/core';
import { MyNewServiceService } from "app/services/my-new-service.service";
import { ListenerService } from "app/services/listener.service";
import { TagService } from "app/services/tag/tags.service";
import { ITagSearchConfiguration } from "app/component/tagsearch/tagsearch.model";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { TagSearchGroupService } from "app/services/tag/tagsearchgroup.service";


var styles = [
  "../node_modules/font-awesome/css/font-awesome.min.css",
  "../node_modules/primeng/resources/primeng.min.css",
  "../node_modules/primeng/resources/themes/omega/theme.css"
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'app works!';


  projectAssignee: string = "ProjectAssignee";

  projectId: number = 100;

  tagConfigurations: any;

  tagSearchGroupService: TagSearchGroupService = new TagSearchGroupService();

  $selectedTags: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);

  get selectedTags() {
    return this.$selectedTags.getValue();
  }

  constructor() {

    setTimeout(() => {
      this.tagSearchGroupService.selectedTags = [
        { id: 1, name: "feature-rich", categoryName: "lesson" },
        { id: 11, name: "JavaScript compiler", categoryName: "user" }
      ];
  
      this.tagSearchGroupService.$selectedTags.subscribe((selectedTags) => { console.log(selectedTags); });
  
      this.tagConfigurations = [
        {
          categoryId: 1,
          categoryName: "lesson",
          labelName: "Lesson(s)",
          searchContext: "projectlesson",
          showFilters: true
        },
        {
          categoryId: 32,
          categoryName: "user",
          labelName: "Users(s)",
          searchContext: "projectuser",
          showFilters: true
        },
        {
          categoryId: 10,
          categoryName: "curriculum",
          labelName: "Curriculum(s)",
          searchContext: "projectcurriculum",
          showFilters: true
        }
      ];
    }, 100);

  }

  changeContextId(value){
    this.projectId = value;
  }


}
