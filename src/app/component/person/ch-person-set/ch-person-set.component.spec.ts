import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChPersonSetComponent } from './ch-person-set.component';

describe('ChPersonSetComponent', () => {
  let component: ChPersonSetComponent;
  let fixture: ComponentFixture<ChPersonSetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChPersonSetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChPersonSetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
