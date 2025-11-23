import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimetableGrid } from './timetable-grid.component';

describe('TimetableGrid', () => {
  let component: TimetableGrid;
  let fixture: ComponentFixture<TimetableGrid>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TimetableGrid]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimetableGrid);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
