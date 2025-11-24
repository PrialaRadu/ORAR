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

  // Output-uri existente...
  @Output() groupChange = new EventEmitter<number>();
  @Output() specializationChange = new EventEmitter<string>();
  @Output() weekChange = new EventEmitter<1 | 2>();

  // NOUL OUTPUT pentru filtre
  @Output() filtersChange = new EventEmitter<{curs: boolean, sem: boolean, lab: boolean}>();

  // Starea filtrelor (toate true by default)
  filters = {
    curs: true,
    sem: true,
    lab: true
  };

  // Logica de toggle
  toggleFilter(type: 'curs' | 'sem' | 'lab') {
    this.filters[type] = !this.filters[type];
    this.filtersChange.emit(this.filters);
  }

  // ... restul funcțiilor (selectGroup, etc.)
  selectGroup(event: any) { this.groupChange.emit(Number(event.target.value)); }
  selectSpecialization(event: any) { this.specializationChange.emit(event.target.value); }
  selectWeek(w: 1 | 2) { this.weekChange.emit(w); }
}
