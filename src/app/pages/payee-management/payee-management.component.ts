import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-payee-management',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './payee-management.component.html',
  styleUrl: './payee-management.component.css'
})
export class PayeeManagementComponent {

  payeeTypes = [
    { id:'1', type:'All', icon:'payees-all.svg' },
    { id:'2', type:'Send Money', icon:'payee-send-money.svg' },
    { id:'3', type:'Mobile Topup', icon:'payee-send-money.svg' },
    { id:'4', type:'Utility Bills', icon:'payee-utility-bills.svg'},
    { id:'5', type:'Fees', icon:'payee-fee.svg' },
    { id:'6', type:'Cards', icon:'payee-credit-card.svg' },
    { id:'7', type:'Others', icon:'payee-credit-card.svg' },
    
    // { id:'8', type:'1 Bill', icon:'payee-1-bill.svg' },
    // { id:'9', type:'Donations', icon:'payee-donation.svg' },
    // { id:'10', type:'Vendors', icon:'payee-vendor.svg' }

  ]
}
