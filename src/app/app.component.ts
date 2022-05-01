import { Component, OnInit } from '@angular/core';
import { PersistenceService } from './services/persistence.service';
export interface Contact {
  id: string;
  name: string;
  number: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  contacts: Contact[] = [];
  filter: string = '';
  constructor(private readonly persistenceService: PersistenceService) {}
  ngOnInit() {
    this.contacts = this.persistenceService.get();
  }
  onAdd(c: Contact) {
    if (this.contacts.some((contact) => contact.name === c.name)) {
      alert('This contact is already in contact list');
      return;
    }
    this.contacts = [c, ...this.contacts];
    this.persistenceService.set(this.contacts);
  }
  onDelete(id: string) {
    this.contacts = this.contacts.filter((c) => c.id !== id);
    this.persistenceService.set(this.contacts);
  }
}
