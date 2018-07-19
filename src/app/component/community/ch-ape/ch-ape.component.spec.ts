import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChApeComponent } from './ch-ape.component';

describe('ChApeComponent', () => {
  let component: ChApeComponent;
  let fixture: ComponentFixture<ChApeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChApeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChApeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
