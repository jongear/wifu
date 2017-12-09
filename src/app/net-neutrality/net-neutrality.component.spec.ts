import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NetNeutralityComponent } from './net-neutrality.component';

describe('NetNeutralityComponent', () => {
  let component: NetNeutralityComponent;
  let fixture: ComponentFixture<NetNeutralityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NetNeutralityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NetNeutralityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
