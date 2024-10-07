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
    { id: 1, actionName: 'Loan', icon : 'more.svg', url:'/settings/login-security'},
    { id: 2, actionName: 'QR', icon : 'more.svg', url:'/settings/account-relationship'},
    { id: 3, actionName: 'Supply chain', icon : 'more.svg', url:'/settings/limit-managment'},
    { id: 4, actionName: 'Real estate', icon : 'more.svg', url:'/settings/scheduled-payments'},
    { id: 5, actionName: 'Insurance', icon : 'more.svg', url:'send-money'},
    { id: 6, actionName: 'Tax', icon : 'more.svg', url:'/settings/appearance'},
    { id: 7, actionName: 'Government', icon : 'more.svg', url:'/settings/language'},
    { id: 8, actionName: 'Vendors', icon : 'more.svg', url:'/settings/digital-activity'},
    { id: 9, actionName: 'Payit', icon : 'more.svg', url:'/settings/login-security'},
    { id: 10, actionName: '1 Bill', icon : 'more.svg', url:'/settings/account-relationship'},
    { id: 11, actionName: 'Kuick pay', icon : 'more.svg', url:'/settings/limit-managment'},
    { id: 12, actionName: 'Paypro', icon : 'more.svg', url:'/settings/scheduled-payments'},
    { id: 13, actionName: 'Haball', icon : 'more.svg', url:'send-money'},
    { id: 14, actionName: 'Tohfay', icon : 'more.svg', url:'/settings/appearance'},
    { id: 15, actionName: 'Shophive', icon : 'more.svg', url:'/settings/language'},
    { id: 16, actionName: 'Donations', icon : 'more.svg', url:'/payments/donations'}
  ];

}
