import { Pipe, PipeTransform } from '@angular/core';
import { Contact } from '../app.component';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(contacts: Contact[], filter: string): Contact[] {
    if (!filter.trim()) {
      return contacts;
    }
    return contacts.filter((c) => c.name.includes(filter));
  }
}
