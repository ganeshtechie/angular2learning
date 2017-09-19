import { Component, OnInit, Input, ElementRef, EventEmitter, Output } from '@angular/core';
import { TagService } from "app/services/tag/tags.service";
import { ITagSearchConfiguration } from "app/component/tagsearch/tagsearch.model";

declare var $:any;

@Component({
  selector: 'app-tagsearch',
  templateUrl: './tagsearch.component.html',
  styleUrls: ['./tagsearch.component.css']
})
export class TagsearchComponent implements OnInit {

  @Input() prop: TagService;
  @Input() configuration: ITagSearchConfiguration;
  @Output() finish: EventEmitter<string> = new EventEmitter<string>();
  @Output() cancel: EventEmitter<string> = new EventEmitter<string>();

  tagfilterHidden: boolean = true;

  constructor(private _elementRef: ElementRef) { }

  ngOnInit() {
  }

  loadTags(){

    this.prop.load({});

  }

  showFilters(){

    // $(this._elementRef.nativeElement).find("[data-role='modal']").modal('toggle');
    this.tagfilterHidden = false;

    this.prop.loadFilters({
      categoryId: this.configuration.categoryId,
      context: this.prop.context
    });

  }

  clearFilters(){

    this.tagfilterHidden = true;

    this.prop.clearFilters();

  }

  closePopup(){
    // $(this._elementRef.nativeElement).find("[data-role='modal']").modal('hide');
    this.tagfilterHidden = true;
  }

  finishSelection(){

    this.finish.emit("finished selecting tags");

    this.prop.emitSelectedEvent();
    

  }

  cancelSelection($event){

    this.cancel.emit("cancelled selecting tags");

  }

}
