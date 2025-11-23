import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-timetable-grid',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './timetable-grid.component.html',
  styleUrls: ['./timetable-grid.component.css']
})
export class TimetableGridComponent {

  @Input() currentDayIndex!: number;
  @Input() currentLinePosition!: number;

  openUrl(url: string) {
    window.open(url, "_blank");
  }

  openRoomLocation(url: string) {
    window.open(url, "_blank");
  }

}
