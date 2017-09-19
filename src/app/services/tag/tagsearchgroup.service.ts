import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import * as _ from "lodash";


@Injectable()
export class TagSearchGroupService {

    $selectedTags: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);

    get selectedTags(){
        return this.$selectedTags.getValue();
    }

    set selectedTags(value){

        value = value.map((item) => { item.selected = true; return item; })
        
        this.$selectedTags.next(value);
    }


    onItemSelected(args){

        var _selectedValue = this.$selectedTags.getValue();

        _selectedValue = _selectedValue.concat(args);

        _selectedValue = _.uniqBy(_selectedValue, "id");

        this.$selectedTags.next(_selectedValue);

    }

}