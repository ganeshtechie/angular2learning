import { Injectable } from '@angular/core';
import { MyNewServiceService } from "app/services/my-new-service.service";
import { Observable } from "rxjs/Observable";
import { Subject } from "rxjs/Subject";

@Injectable()
export class ListenerService {

  suggestions: Subject<any[]> = new Subject<any[]>();

  service: MyNewServiceService;

  constructor(private _service: MyNewServiceService) {

    this.service = _service;

    this.service.$address.subscribe((value) => {

      console.log("address changed: " + value);

      this.suggestions.next([ "India", "Australia", "USA", "Newzeland" ]);

    });

    this.suggestions.subscribe((value) => {
      console.log("Suggestions Changed"); console.log(value);
    });

  }

}
