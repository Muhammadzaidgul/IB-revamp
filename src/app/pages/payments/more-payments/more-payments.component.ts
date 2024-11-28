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
    { id: 1, actionName: '1 Bill', icon : 'more.svg', url:''},
    { id: 2, actionName: 'Government & Taxes', icon : 'more.svg', url:''},
    { id: 3, actionName: 'Haball', icon : 'more.svg', url:''},
    { id: 4, actionName: 'Investment', icon : 'more.svg', url:''},
    { id: 5, actionName: 'Insurance', icon : 'more.svg', url:''},
    { id: 6, actionName: 'Paypro', icon : 'more.svg', url:''},
    { id: 7, actionName: 'Donations', icon : 'more.svg', url:'/payments/donations'}
  ];

}
