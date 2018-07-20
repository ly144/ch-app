import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChBackstageAddChapterComponent } from './ch-backstage-add-chapter.component';

describe('ChBackstageAddChapterComponent', () => {
  let component: ChBackstageAddChapterComponent;
  let fixture: ComponentFixture<ChBackstageAddChapterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChBackstageAddChapterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChBackstageAddChapterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
