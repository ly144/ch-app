import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChLogRegisteredComponent } from './ch-log-registered.component';

describe('ChLogRegisteredComponent', () => {
  let component: ChLogRegisteredComponent;
  let fixture: ComponentFixture<ChLogRegisteredComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChLogRegisteredComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChLogRegisteredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
