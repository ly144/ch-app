import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChHeaderComponent } from './ch-header.component';

describe('ChHeaderComponent', () => {
  let component: ChHeaderComponent;
  let fixture: ComponentFixture<ChHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
