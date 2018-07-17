import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChDetailsComponent } from './ch-details.component';

describe('ChDetailsComponent', () => {
  let component: ChDetailsComponent;
  let fixture: ComponentFixture<ChDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
