import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-more-payments',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './more-payments.component.html',
  styleUrl: './more-payments.component.css'
})
export class MorePaymentsComponent {
  componentName = 'Other payments';

  settinglist = [
    { id: 1, actionName: '1 Bill', icon : 'more.svg', url:'/payments/more-payments/one-bill'},
    { id: 2, actionName: 'Government & Taxes', icon : 'more.svg', url:'/payments/more-payments/goverment-and-taxes'},
    { id: 3, actionName: 'Haball', icon : 'more.svg', url:'/payments/more-payments/haball'},
    { id: 4, actionName: 'Investment', icon : 'more.svg', url:''},
    { id: 5, actionName: 'Insurance', icon : 'more.svg', url:'/payments/more-payments/insurance'},
    { id: 6, actionName: 'Paypro', icon : 'more.svg', url:'/payments/more-payments/pay-pro'},
    { id: 7, actionName: 'Kuickpay', icon : 'more.svg', url:'/payments/more-payments/kuickpay'},
    { id: 8, actionName: 'Donations', icon : 'more.svg', url:'/payments/donations'}
  ];

}
