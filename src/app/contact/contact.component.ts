import {
  Component,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef,
} from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  @Input() name: string = '';
  @Input() number: string = '';
  @Input() id: string = '';
  @Output() onDelete: EventEmitter<string> = new EventEmitter<string>();
  @ViewChild('contact') elRef!: ElementRef;
  constructor() {}
  onClick() {
    this.onDelete.emit((<HTMLLIElement>this.elRef.nativeElement).id);
  }
}
