import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChHomeRecommendComponent } from './ch-home-recommend.component';

describe('ChHomeRecommendComponent', () => {
  let component: ChHomeRecommendComponent;
  let fixture: ComponentFixture<ChHomeRecommendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChHomeRecommendComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChHomeRecommendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
