import { NgFor } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RestoCategorie } from '../../interface';

@Component({
  selector: 'app-menu-categories',
  standalone: true,
  imports: [NgFor],
  templateUrl: './menu-categories.component.html',
  styleUrl: './menu-categories.component.scss'
})
export class MenuCategoriesComponent {
  @Input() categories!: RestoCategorie[]
  @Output() selectedEvent : EventEmitter<string> = new EventEmitter()
}
