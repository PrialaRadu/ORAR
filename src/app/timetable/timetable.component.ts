import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { TimetableGridComponent } from './components/timetable-grid/timetable-grid.component';

@Component({
  selector: 'app-timetable',
  standalone: true,
  imports: [
    CommonModule,
    SidebarComponent,
    HeaderComponent,
    TimetableGridComponent
  ],
  templateUrl: './timetable.component.html',
  styleUrls: ['./timetable.component.css']
})
export class TimetableComponent implements OnInit {

  selectedWeek: 1 | 2 = 1;

  groups = [331, 332, 333];
  selectedGroup = 333;

  specializations = [
    "Mate-Info – anul I",
    "Mate-Info – anul II",
    "Mate-Info – anul III"
  ];
  selectedSpecialization = this.specializations[0];

  currentDayIndex = 0;
  currentLinePosition = 0;

  ngOnInit(): void {
    this.updateTimeLine();
    setInterval(() => this.updateTimeLine(), 60 * 1000);
  }

  updateTimeLine() {
    const now = new Date();
    const day = now.getDay();
    this.currentDayIndex = day >= 1 && day <= 5 ? day : 0;

    const hour = now.getHours() + now.getMinutes() / 60;
    const startHour = 8;
    const pxPerHour = 50;

    this.currentLinePosition = (hour - startHour) * pxPerHour;
  }

  selectWeek(w: 1 | 2) {
    this.selectedWeek = w;
  }

  selectGroup(g: number) {
    this.selectedGroup = g;
  }

  selectSpecialization(s: string) {
    this.selectedSpecialization = s;
  }
}
