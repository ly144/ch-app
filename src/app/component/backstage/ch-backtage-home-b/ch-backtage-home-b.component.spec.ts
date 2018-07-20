import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChBacktageHomeBComponent } from './ch-backtage-home-b.component';

describe('ChBacktageHomeBComponent', () => {
  let component: ChBacktageHomeBComponent;
  let fixture: ComponentFixture<ChBacktageHomeBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChBacktageHomeBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChBacktageHomeBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
