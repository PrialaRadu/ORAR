import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-event-attendance',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './event-attendance.component.html',
  styleUrls: ['./event-attendance.component.css']
})
export class EventAttendanceComponent {

  @Input() present: number = 0;
  @Input() total: number = 14;

  increase() {
    if (this.present < this.total) this.present++;
  }

  decrease() {
    if (this.present > 0) this.present--;
  }
}
