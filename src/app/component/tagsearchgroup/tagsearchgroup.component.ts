import { Component, OnInit, ElementRef, Input } from '@angular/core';
import { TagService } from "app/services/tag/tags.service";
import { ITagSearchConfiguration } from "app/component/tagsearch/tagsearch.model";
import { TagSearchGroupService } from "app/services/tag/tagsearchgroup.service";

declare var $: any;

@Component({
  selector: 'app-tagsearchgroup',
  templateUrl: './tagsearchgroup.component.html',
  styleUrls: ['./tagsearchgroup.component.css']
})
export class TagsearchgroupComponent implements OnInit {

  state: any[] = [];

  currentServiceInstance: TagService;
  currentConfiguration: ITagSearchConfiguration;

  @Input() tagConfigurations: any;
  @Input() tagsearchgroupService: TagSearchGroupService;

  _modalReference: any;

  constructor(private _elementRef: ElementRef) {

  }

  ngOnInit() {

    let that = this;

    this._modalReference = $(this._elementRef.nativeElement).find("[data-role='modal']");

    var _state = [];

    var configuration = {};

    for (var i = 0; i < this.tagConfigurations.length; i++) {
      configuration[this.tagConfigurations[i].categoryName] = this.tagConfigurations[i];
    }

    for (var prop in configuration) {

      var currentConfig = configuration[prop],
        currentState = {},
        service = new TagService();

      service.selectedTags = [];

      service.$selectedTags.subscribe((item) => {
        that.tagsearchgroupService.onItemSelected(item);
      });

      var preselectedTags  = that.tagsearchgroupService.selectedTags;

      var filteredResult = preselectedTags.filter((item) => { return item.categoryName === prop; }).slice();

      service.selectedTags = filteredResult;

      currentState = {
        name: prop,
        service: service,
        config: Object.assign({}, currentConfig)
      };

      this.state.push(currentState);

    }

  }

  search(state) {

    this._modalReference.modal("show");

    // state.service.clearResults();

    this.currentServiceInstance = state.service;
    this.currentConfiguration = state.config;

  }

  closeModal() {
    this._modalReference.modal("hide");
  }

  remove(service: any, tag: any) {

    service.service.removeSelectedItem(tag);

  }

}
