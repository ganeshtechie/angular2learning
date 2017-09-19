import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs/BehaviorSubject";
 

@Injectable()
export class TagService {

    context: string;

    $selectedTags: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);

    get selectedTags() {
        return this.$selectedTags.getValue();
    }
    set selectedTags(value) {
        debugger;
        this.$selectedTags.next(value);
    }


    /**
     * to reset the filters, we will take this value.
     */
    _filtersBackup: string;

    $filters: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);

    get filters() {
        return this.$filters.getValue();
    }
    set filters(value) {
        this.$filters.next(value);
    }


    $items: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);

    get items() {
        return this.$items.getValue();
    }
    set items(value) {
        this.$items.next(value);
    }



    whereConditions: string = "";

    /**
     * @param _param - will have the recent search query parameters
     * this is to reuse the params when any filters are applied to the component
     */
    _param: any;

    /**
     * 
     * @param param should have the following properties
     * searchContext - can be any string
     * tagCategoryId - the category id of the tag. ex: Lessons ( 10 )
     * whereCondition - key=value&key=value
     */
    load(param: any) {

        this._param = param;

        setTimeout(function () {

            let currentlySelectedItems: any[] = this.selectedTags;

            var result = [
                { id: 1, name: "feature-rich", selected: false },
                { id: 2, name: "javascript-library", selected: false },
                { id: 3, name: "information", selected: false },
                { id: 4, name: "jQuery's documentation", selected: false },
                { id: 5, name: "Knockout", selected: false },
                { id: 6, name: "readable changelog", selected: false },
                { id: 7, name: "Node", selected: false },
                { id: 8, name: "Asynchronous Module Definition", selected: false },
                { id: 9, name: "jQuery", selected: false },
                { id: 10, name: "Angular", selected: false },
                { id: 11, name: "JavaScript compiler", selected: false },
                { id: 12, name: "jQuery", selected: false }
            ];

            var newlyRetrievedItems = [];

            result.map((item) => {

                if (currentlySelectedItems.filter((csi) => { return csi.id === item.id; }).length === 0) {
                    newlyRetrievedItems = newlyRetrievedItems.concat([item]);
                } 

            });

            currentlySelectedItems = currentlySelectedItems.concat(newlyRetrievedItems);

            this.items = currentlySelectedItems;

        }.bind(this), 100);

    }


    /**
     *  @param param supports the following properties
     *  categoryId - ID of the tag category for which the filters are requested. ex: '10' for Lessons
     *  context - The Context in which all the tags are loaded. ex: 'ProjectTags' for project edit page
     */
    loadFilters(param) {

        if(this.filters.length > 0) return;

        let filters = [
            {
                filter_name: "Subject", items: [
                    { id: 1, name: "Programming" },
                    { id: 2, name: "History" }
                ]
            },
            {
                filter_name: "Grade",
                items: [
                    { id: 1, name: "First Year" },
                    { id: 2, name: "Second Year" },
                    { id: 1, name: "First Year" },
                    { id: 2, name: "Second Year" },
                    { id: 1, name: "First Year" },
                    { id: 2, name: "Second Year" },
                    { id: 1, name: "First Year" },
                    { id: 2, name: "Second Year" },
                    { id: 1, name: "First Year" },
                    { id: 2, name: "Second Year" },
                    { id: 1, name: "First Year" },
                    { id: 2, name: "Second Year" },
                    { id: 1, name: "First Year" },
                    { id: 2, name: "Second Year" }
                ]
            },
            {
                filter_name: "Curriculum",
                items: [
                    { id: 1, name: "First Year" },
                    { id: 2, name: "Second Year" }
                ]
            },
            {
                filter_name: "Calendar",
                items: [
                    { id: 1, name: "2016 - 2017" },
                    { id: 2, name: "2017 - 2018" }
                ]
            }
        ];

        // storing it for later use
        this._filtersBackup = JSON.stringify(filters)

        this.filters = filters.slice();
    }

    applyFilters() {

        let selectedFilters: any[] = [];

        this.filters.map(function (filter) {

            selectedFilters = selectedFilters.concat(filter.items.filter((item) => { return item.selected; }));

        });

        this.whereConditions = selectedFilters.map((sf) => { return "id=" + sf.id; }).join("&");

        this.load({ 
            whereCondition: this.whereConditions 
        });

    }

    clearFilters(){
        this.whereConditions = "";
        this.filters = JSON.parse(this._filtersBackup);

        this.load({ 
            whereCondition: this.whereConditions 
        });
        
    }

    emitSelectedEvent(){

        this.selectedTags = this.items.filter((item) => { return item.selected; });

    }

    clearResults(){
        this.$items.next([]);
    }

    removeSelectedItem(tag: any){

        this.selectedTags = this.selectedTags.filter((item) => { return item.id !== tag.id; });

    }

    constructor() {

        this.$filters.subscribe(() => {
            console.log("filters modified...!!!");
        });

    }

}