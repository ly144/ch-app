import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChFooterComponent } from './ch-footer.component';

describe('ChFooterComponent', () => {
  let component: ChFooterComponent;
  let fixture: ComponentFixture<ChFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
