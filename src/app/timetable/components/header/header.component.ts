import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  @Input() groups!: number[];
  @Input() selectedGroup!: number;

  @Input() specializations!: string[];
  @Input() selectedSpecialization!: string;

  @Input() selectedWeek!: 1 | 2;

  @Output() groupChange = new EventEmitter<number>();
  @Output() specializationChange = new EventEmitter<string>();
  @Output() weekChange = new EventEmitter<1 | 2>();

  selectGroup(event: any) {
    this.groupChange.emit(Number(event.target.value));
  }

  selectSpecialization(event: any) {
    this.specializationChange.emit(event.target.value);
  }

  selectWeek(w: 1 | 2) {
    this.weekChange.emit(w);
  }
}
