import { Injectable } from '@angular/core';
import { Contact } from './../app.component';

@Injectable({
  providedIn: 'root',
})
export class PersistenceService {
  set(contacts: Contact[]) {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }
  get() {
    if (typeof localStorage.getItem('contacts') === 'string') {
      return JSON.parse(localStorage.getItem('contacts') as string);
    }
    return [];
  }
}
