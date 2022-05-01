import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Contact } from '../app.component';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss'],
})
export class ContactListComponent {
  @Input() contacts: Contact[] = [];
  @Output() onDelete: EventEmitter<string> = new EventEmitter<string>();
  constructor() {}
}
