export interface ClassSchedule {
  uuid: string;
  subjectUuid: string;
  location: string;
  classType: string;
  duration: number;
  frequency: string;
  dayOfWeek: string;
  startingHour: number;
}
