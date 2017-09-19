import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { TagService } from "app/services/tag/tags.service";

declare var $: any;

@Component({
  selector: 'app-tagfilter',
  templateUrl: './tagfilter.component.html',
  styleUrls: ['./tagfilter.component.css']
})
export class TagfilterComponent implements OnInit {

  @Input() prop: TagService;
  @Output() onAfterFilterApplied: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {

  }

  selectTag($event, item){
    item.selected = $event.target.checked;
  }

  applyFilter(){

    this.prop.applyFilters();

    this.onAfterFilterApplied.emit("filter applied successfully");

  }

  searchByName($event){
    $event.preventDefault();

    var $btn  = $($event.target),
      $form = $btn.closest("form"),
      $input = $form.find("input"),
      $container = $btn.closest(".jq-container");

    
    var searchtext = $input.val();

    if(searchtext.length > 0){
      $container.find("li[data-filter]").hide();
      $container.find("li[data-filter*='" + searchtext + "']").show();
    } else {
      $container.find("li[data-filter]").show();
    }

  }

}
