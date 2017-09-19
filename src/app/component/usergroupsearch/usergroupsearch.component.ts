import { Component, OnInit, Input } from '@angular/core';
import { UsersearchService } from "app/services/usersearch/usersearch.service";
import { BehaviorSubject } from "rxjs/BehaviorSubject";

declare var $: any;

@Component({
  selector: 'app-usergroupsearch',
  templateUrl: './usergroupsearch.component.html',
  styleUrls: ['./usergroupsearch.component.css']
})
export class UsergroupsearchComponent implements OnInit {


  $contextId: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  @Input()
  get contextId() {
    return this.$contextId.getValue();
  }
  set contextId(value) {
    this.$contextId.next(value);
  }

  @Input() context: string = "";

  usersearchService: UsersearchService;

  constructor() {

    this.usersearchService = new UsersearchService();

    this.$contextId.subscribe(this.searchUsers.bind(this));

  }

  ngOnInit() {

    this.usersearchService.context = this.context;

  }


  selectItem(item) {
    this.usersearchService.selectItem(item);
  }

  removeItem(item) {
    this.usersearchService.removeSelectedItem(item);
  }

  /**
   * 
   * @param contextId can be project Id or Assignment Id depending on the context
   */
  searchUsers(contextId) {

    this.usersearchService.contextId = contextId;

    this.usersearchService.loadSearchResults();

  }


  search($event) {
    var element = $($event.target);

    var list = element.closest(".jq-root").find(".jq-search-list");
    var input = element.closest(".jq-root").find(".jq-searchquery");

    var searchtext = $(input).val();

    if (searchtext.length > 0) {
      list.find("li[data-filter]").hide();
      list.find("li[data-filter*='" + searchtext + "']").show();
    } else {
      list.find("li[data-filter]").show();
    }


  }

}
