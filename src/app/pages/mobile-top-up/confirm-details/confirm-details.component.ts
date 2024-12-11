import { Component,Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-confirm-details',
  standalone: true,
  imports: [],
  templateUrl: './confirm-details.component.html',
  styleUrl: './confirm-details.component.css'
})
export class ConfirmDetailsComponent {

  @Input() item = ''; // decorate the property with @Input()
  @Output() sendRequest = new EventEmitter<string>();
  childValue = '5';

  splitPayment = true;

  addNewItem(value: string) {
    this.sendRequest.emit(value);
  }
}
