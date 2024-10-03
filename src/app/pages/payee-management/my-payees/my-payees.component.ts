import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { MatChipsModule } from '@angular/material/chips';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-my-payees',
  standalone: true,
  imports: [MatChipsModule,RouterModule],
  templateUrl: './my-payees.component.html',
  styleUrl: './my-payees.component.css'
})
export class MyPayeesComponent {

  payeeTypes = [
    { id:'1', type:'All', icon:'payees-all.svg' },
    { id:'2', type:'Send Money', icon:'payee-send-money.svg' },
    { id:'3', type:'Mobile Topup', icon:'payee-send-money.svg' },
    { id:'4', type:'Utility Bills', icon:'payee-utility-bills.svg'},
    { id:'5', type:'Fees', icon:'payee-fee.svg' },
    { id:'6', type:'Credit Cards', icon:'payee-credit-card.svg' },
    { id:'7', type:'Loans', icon:'payee-loan.svg' },
    { id:'8', type:'1 Bill', icon:'payee-1-bill.svg' },
    { id:'9', type:'Donations', icon:'payee-donation.svg' },
    { id:'10', type:'Vendors', icon:'payee-vendor.svg' }

  ]


  constructor(private location: Location){

  }
  
  back():void{
    this.location.back();
  }

}

