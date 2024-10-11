import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DataService } from '../../web/services/data.service';
import { NewPayeeComponent } from './new-payee/new-payee.component';

@Component({
  selector: 'app-mobile-top-up',
  standalone: true,
  imports: [RouterModule, NewPayeeComponent],
  templateUrl: './mobile-top-up.component.html',
  styleUrl: './mobile-top-up.component.css'
})
export class MobileTopUpComponent {



  constructor(private dataService: DataService) {}

  new_payment: boolean = true;

  goto: boolean = false;

  existing() {
    this.new_payment = false;
    this.goto = true;
    
  }

  payees = [
    { id:1, logo: '', payeeName: ''},
    { id:2, logo: '', payeeName: ''},
    { id:3, logo: '', payeeName: ''},
    { id:4, logo: '', payeeName: ''},
    { id:5, logo: '', payeeName: ''}
  ];

  

  newPayment() {
    this.new_payment = true;
  }
}
