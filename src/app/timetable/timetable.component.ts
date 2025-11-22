import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-timetable',
  standalone: true,
  imports: [CommonModule],
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

  // --------------------------
  // 🔴 Indicator timp real
  // --------------------------
  currentDayIndex: number = 0;      // 1–5 (Luni=1)
  currentLinePosition: number = 0;  // în px

  ngOnInit(): void {
    this.updateTimeLine();
    setInterval(() => this.updateTimeLine(), 60 * 1000); // actualizare la fiecare minut
  }

  updateTimeLine() {
    const now = new Date();

    // ziua curentă: Luni=1 ... Vineri=5
    const day = now.getDay(); // 1=Luni ... 5=Vineri
    this.currentDayIndex = day >= 1 && day <= 5 ? day : 0;

    // ora curentă
    const hour = now.getHours() + now.getMinutes() / 60;


    // Orarul tău începe la 8 AM → calculează poziția
    const startHour = 8;
    const pxPerHour = 50;  // 50px per celulă (în CSS)
    this.currentLinePosition = (hour - startHour) * pxPerHour;
  }

  // UI selections
  selectWeek(week: 1 | 2) { this.selectedWeek = week; }
  selectGroup(event: any) { this.selectedGroup = Number(event.target.value); }
  selectSpecialization(event: any) { this.selectedSpecialization = event.target.value; }


}
