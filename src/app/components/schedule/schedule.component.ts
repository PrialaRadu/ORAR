import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScheduleService } from '../../services/schedule.service';
import { ClassSchedule } from '../../core/models/class-schedule.model';

@Component({
  selector: 'app-schedule',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {

  schedule: ClassSchedule[] = [];

  constructor(private scheduleService: ScheduleService) {}

  ngOnInit(): void {
    this.schedule = this.scheduleService.getScheduleMock();
  }
}
