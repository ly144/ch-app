import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChPersonApeComponent } from './ch-person-ape.component';

describe('ChPersonApeComponent', () => {
  let component: ChPersonApeComponent;
  let fixture: ComponentFixture<ChPersonApeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChPersonApeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChPersonApeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
