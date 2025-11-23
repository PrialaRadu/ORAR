import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimetableComponent } from './timetable/timetable.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, TimetableComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {}
