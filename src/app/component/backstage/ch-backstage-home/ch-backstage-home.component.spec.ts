import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChBackstageHomeComponent } from './ch-backstage-home.component';

describe('ChBackstageHomeComponent', () => {
  let component: ChBackstageHomeComponent;
  let fixture: ComponentFixture<ChBackstageHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChBackstageHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChBackstageHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
