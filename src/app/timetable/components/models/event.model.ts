export interface TimetableEvent {
  type: 'lab' | 'curs' | 'sem';
  title: string;
  professor: string;
  room: string;
  row: number;
  span: number;
  column: number;
  profLink?: string;
  roomLink?: string;
  present: number;
  total: number;
}
