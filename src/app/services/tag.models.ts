
import { BehaviorSubject } from "rxjs/BehaviorSubject";

export interface ITagState {
  $subject: BehaviorSubject<any[]>;
  $grade: BehaviorSubject<any[]>;
  $curriculum: BehaviorSubject<any[]>;
}

export interface ITagService {
    watch(state: ITagState);
}