import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent {
  @Input() filter: string = '';
  @Output() onFilter: EventEmitter<string> = new EventEmitter<string>();
  constructor() {}
  onChanges(e: Event) {
    this.onFilter.emit((<HTMLInputElement>e.target).value);
  }
}
