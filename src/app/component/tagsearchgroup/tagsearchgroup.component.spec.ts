import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TagsearchgroupComponent } from './tagsearchgroup.component';

describe('TagsearchgroupComponent', () => {
  let component: TagsearchgroupComponent;
  let fixture: ComponentFixture<TagsearchgroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TagsearchgroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TagsearchgroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
