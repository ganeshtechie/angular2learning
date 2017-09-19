import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TagfilterComponent } from './tagfilter.component';

describe('TagfilterComponent', () => {
  let component: TagfilterComponent;
  let fixture: ComponentFixture<TagfilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TagfilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TagfilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
