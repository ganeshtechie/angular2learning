import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs/Rx";

declare var _: any;

@Injectable()
export class UsersearchService {

  context: string = "";
  contextId: number = 0;

  constructor() { 

    this.$searchResults.subscribe(this.filterSelectedItems.bind(this));
  }

  $selectedItems: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);

  get selectedItems() {
    return this.$selectedItems.getValue();
  }
  set selectedItems(value) {
    this.$selectedItems.next(value);
  }

  $searchResults: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);

  get searchResults() {
    return this.$searchResults.getValue();
  }
  set searchResults(value) {
    this.$searchResults.next(value);
  }


  loadSearchResults() {

    let results = [{ id: 1, title: "Ganesh Rajan", type: "user" },
    { id: 2, title: "Ganesh Marri", type: "user" },
    { id: 3, title: "Physics Group", type: "group" },
    { id: 4, title: "History Group", type: "group" }];

    if(this.contextId == 10){
      results = [{ id: 1, title: "Ganesh Rajan", type: "user" },
      { id: 4, title: "History Group", type: "group" }];
    }


    setTimeout((() => { this.searchResults = results; }).bind(this), 100);

  }


  selectItem(item){

    var selectedItems = JSON.parse(JSON.stringify(this.selectedItems));

    selectedItems = selectedItems.concat([item]);

    this.selectedItems = selectedItems;

  }

  removeSelectedItem(args){

    var selectedItems = JSON.parse(JSON.stringify(this.selectedItems));

    selectedItems = selectedItems.filter(item => { return item.id !== args.id; });

    this.selectedItems = selectedItems;


  }

  filterSelectedItems(searchResult){

    var selectedItems = JSON.parse(JSON.stringify(this.selectedItems));

    _.remove(selectedItems, (item) => {
      return searchResult.filter(i => { return i.id == item.id; }).length === 0;
    });

    this.selectedItems = selectedItems;
    
  }

}
