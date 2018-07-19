import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChPersonComponent } from './ch-person.component';

describe('ChPersonComponent', () => {
  let component: ChPersonComponent;
  let fixture: ComponentFixture<ChPersonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChPersonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChPersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
