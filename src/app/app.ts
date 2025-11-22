import { Component } from '@angular/core';
import { ScheduleComponent } from './components/schedule/schedule.component';
import {TimetableComponent} from './timetable/timetable.component';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ScheduleComponent, TimetableComponent, NgOptimizedImage],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {}
