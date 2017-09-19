import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsergroupsearchComponent } from './usergroupsearch.component';

describe('UsergroupsearchComponent', () => {
  let component: UsergroupsearchComponent;
  let fixture: ComponentFixture<UsergroupsearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsergroupsearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsergroupsearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
