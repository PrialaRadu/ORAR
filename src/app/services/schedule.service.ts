import { Injectable } from '@angular/core';
import { ClassSchedule } from '../core/models/class-schedule.model';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {

  constructor() {}

  getScheduleMock(): ClassSchedule[] {
    return [
      {
        uuid: '1',
        subjectUuid: 'sub1',
        location: 'A331',
        classType: 'Retele',
        duration: 2,
        frequency: 'weekly',
        dayOfWeek: 'Monday',
        startingHour: 10
      },
      {
        uuid: '2',
        subjectUuid: 'sub2',
        location: '2I',
        classType: 'Ecuatii',
        duration: 1,
        frequency: 'weekly',
        dayOfWeek: 'Wednesday',
        startingHour: 12
      }
    ];
  }
}
