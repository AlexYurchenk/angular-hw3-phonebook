import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { FormComponent } from './form/form.component';
import { PersistenceService } from './services/persistence.service';
import { FormsModule } from '@angular/forms';
import { FilterComponent } from './filter/filter.component';
import { FilterPipe } from './pipes/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    ContactListComponent,
    FormComponent,
    FilterComponent,
    FilterPipe,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [PersistenceService],
  bootstrap: [AppComponent],
})
export class AppModule {}
