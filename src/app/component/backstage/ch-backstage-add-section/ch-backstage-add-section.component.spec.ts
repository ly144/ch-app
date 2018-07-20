import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChBackstageAddSectionComponent } from './ch-backstage-add-section.component';

describe('ChBackstageAddSectionComponent', () => {
  let component: ChBackstageAddSectionComponent;
  let fixture: ComponentFixture<ChBackstageAddSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChBackstageAddSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChBackstageAddSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
