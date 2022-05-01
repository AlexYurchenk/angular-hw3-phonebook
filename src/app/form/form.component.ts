import { Component, Output, EventEmitter } from '@angular/core';
import { Contact } from '../app.component';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent {
  @Output() onAdd: EventEmitter<Contact> = new EventEmitter<Contact>();
  constructor() {}
  name = '';
  number = '';
  onSubmit(e: Event) {
    e.preventDefault();
    if (this.name === '' || this.number === '') {
      alert('Please, fill in the form');
    }
    this.onAdd.emit({
      id: uuidv4(),
      name: this.name,
      number: this.number,
    });
    this.clearFrom();
  }
  clearFrom() {
    this.name = '';
    this.number = '';
  }
}
