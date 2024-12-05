import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-column',
  imports: [],
  templateUrl: './column.component.html',
  styleUrl: './column.component.scss',
})
export class ColumnComponent {
  @Input() icon: string = '';
}